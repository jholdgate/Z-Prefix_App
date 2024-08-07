const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

const SECRET_KEY = "my_secret_key";

// Create App
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ROUTES

app.post("/verify", async (req, res) => {
  const { user, pass, type } = req.body;
  let query = await knex('users').select('*').where("username", user);

  if (type === "login") {
    if (query.length === 1 && await bcrypt.compare(pass, query[0].password)) {
      const token = jwt.sign({ username: user, userId: query[0].id }, SECRET_KEY, { expiresIn: '1d' });
      await knex('users').update({auth_token: token}).where("username", user);
      res.cookie('auth_token', token, { httpOnly: true, secure: false });
      res.status(200).json({
        message: "Logging you in",
        token,
        userId: query[0].id
       });
    } else {
      res.status(404).json({ message: "Incorrect username or password"});
    }
  } else if (type === "create") {
    if (query.length === 0) {
      const hashedPassword = await bcrypt.hash(pass, 10);
      const [newUserId] = await knex('users').insert({ username: user, password: hashedPassword, auth_token: ''}).returning('id');
      res.status(200).json({ message: "User Created", userId: newUserId});
    } else {
      res.status(401).json({ message: "Username already exists"});
    }
  } else {
    res.status(404).json({ message: "Invalid operation"})
  }
})

app.get('/protected-route', (req, res) => {
  const token = req.cookies.auth_token;
  console.log(token)
  if (!token) return res.status(401).json("Access denied");

  try {
      const verified = jwt.verify(token, SECRET_KEY);
      res.status(200).json("Access granted");
  } catch (err) {
      res.status(400).json("Invalid token");
  }
});

app.get("/", (req, res) => {
  res.status(200).send("WORKING!");
});

// Get all users

app.get("/users", (req, res) => {
  knex("users")
    .select('*')
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(301).send("Error retrieving users");
    });
});

// Create new user

app.post("/users", (req, res) => {
  knex("users")
    .insert(req.body)
    .returning("*")
    .then((data) => {
      res.json(data[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating new user");
    });
});

// Get items by user

app.get("/items/users/:usersId", (req, res) => {
  const usersId = req.params.usersId;

  knex("items")
    .join("users", "items.users_id", "=", "users.id")
    .where("users.id", usersId)
    .select("items.*", "users.username as user_name")
    .then((items) => {
      if (items.length) {
        res.status(200).json(items);
      } else {
        res.status(404).json({ message: "No items found for this user" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching items" });
    });
});

// Get all items

app.get("/items", (req, res) => {
  knex("items")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(301).send("Error retrieving items");
    });
});

// Get single items

app.get("/items/:id", (req, res) => {
  knex("items")
    .where({ id: req.params.id })
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving items");
    });
});

// Create an item

app.post("/items", (req, res) => {
  const { item_name, quantity, description, users_id } = req.body;

  // Validate input
  if (!item_name || !quantity || !description || !users_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }


  knex("items")
    .insert({ item_name, quantity, description, users_id })
    .returning("*")
    .then((data) => {
      res.status(201).json(data[0]);
    })
    .catch((err) => {
      console.error("Error creating item:", err);
      res.status(500).send({
        error: "Error creating item",
        details: err.message
      });
    });
});

// Update an item

app.put("/items/:id", (req, res) => {
  knex("items")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then((data) => {
      if (data.length) {
        res.status(200).json(data[0]);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating items");
    });
});

// Delete an item

app.delete("/items/:id", (req, res) => {
  knex("items")
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      if (count) {
        res.status(200).send({ message: "Item deleted successfully" });
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting items");
    });
});

// LISTEN

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

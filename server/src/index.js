const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 8080;

const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

// Create App
const app = express();

// MIDDLEWARE
app.use(express.json()); //JSON

// Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("tiny")); //MORGAN

// ROUTES

app.get("/", (req, res) => {
  res.status(200).send("WORKING!");
});

// Get all users

app.get("/users", (req, res) => {
  knex("users")
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
    .select("items.*", "users.username as user_name") //changed users.name to users.username
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
  knex("items")
    .insert(req.body)
    .returning("*")
    .then((data) => {
      res.json(data[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating item");
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
        res.status(200).send;
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

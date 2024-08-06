const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8080;

const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);


// create app
const app = express();


//MIDDLEWARE
  app.use(express.json())//JSON

  //cors
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.use(morgan('tiny'))//MORGAN


// ROUTES

app.get('/', (req,res)=>{
  res.status(200).send("WORKING!");
});

app.get('/users', (req,res) => {
  knex('users')
    .then((data) => {
      res.status(200).send(data);
    })
  .catch((err) => {
    console.log(err);
    res.status(301).send('Error retrieving users')
  });
});

app.get('/items', (req,res) => {
  knex('items')
    .then((data) => {
      res.status(200).send(data);
    })
  .catch((err) => {
    console.log(err);
    res.status(301).send('Error retrieving items')
  });
});

// LISTEN
app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
})
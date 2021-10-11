const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to GoldGames API.' });
});

require('./app/routes/game.route')(app);

mongoose.connect('mongodb+srv://nadhif:AhsJ7Ckv0MIya9D2@cluster0.pxccw.mongodb.net/GoldGames?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000 and connection to databse success');
    });
  })
  .catch((err) => console.log(err));

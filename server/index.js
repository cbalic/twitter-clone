const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/twitter-clone-db', {useNewUrlParser: true} )
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error('Unable to connect to MongoDB', err));

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
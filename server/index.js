require('dotenv').config({ path:''});

const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('connected to database'));

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
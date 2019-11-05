const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log(`Connected to ${config.MONGODB_URI}`));
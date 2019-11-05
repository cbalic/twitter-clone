require('dotenv').config();

const config = {
    MONGODB_URI: process.env.DB_CONNECTION_STRING
};

module.exports = config;
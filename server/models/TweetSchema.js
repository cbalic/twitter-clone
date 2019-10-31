const mongoose = require('mongoose');

// Mongoose schema for tweet
const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        maxlength: 280,
        minlength: 1
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports.Tweet = Tweet;
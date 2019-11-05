const mongoose = require('mongoose');

// Mongoose schema for tweet
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        maxlength: 280,
        minlength: 1,
        required: true
    }
});

// Create model for document creation
const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports.Tweet = Tweet;
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

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

// Joi schema validation
// Checks if string, length, and required input satisfy tweetSchema
function validateTweet(tweet) {
    const schema = {
        content: Joi.string().min(1).max(280).required()
    };
    return Joi.validate(tweet, schema);
}

module.exports.Tweet = Tweet;
module.exports.validate = validateTweet;
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

const Tweet = mongoose.model('Tweet', tweetSchema);

// const newDoc = Tweet({
//     content: 'example tweet'
// });

// let newTweet = new Tweet({content: { 'Test Tweet' }});
// newTweet.save();
module.exports.Tweet = Tweet;
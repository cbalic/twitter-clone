const express = require('express');
const router = express.Router();
const { Tweet } = require('../models/TweetSchema');

// CRUD methods for retrieving info from mongoDB

// GET the tweet by awaiting Tweet.find()
router.get('/', async (req, res) => {
    const tweets = await Tweet.find();
    res.send(tweets);
}); 

// POST a new tweet to the main feed
router.post('/', async (req, res) => {
    let tweet = new Tweet({
        body: req.body
    });
    tweet = await tweet.save();
    res.send(tweet);
});

// DELETE a given tweet
router.delete(':/id', async (req, res) => {
    const tweet = await Tweet.findByIdAndDelete(req.params.id);
    res.send(tweet);
});

module.exports = router;
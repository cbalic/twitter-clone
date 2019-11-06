const express = require('express');
const router = express.Router();
const { Tweet, validate } = require('../models/TweetSchema');

/* CRUD methods for retrieving info from mongoDB */

// GET the tweet by awaiting Tweet.find()
router.get('/', async (req, res) => {
    const tweets = await Tweet.find();
    res.send(tweets);
}); 

// POST a new tweet to the main feed
router.post('/', async (req, res) => {
    // validation for incoming requests
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let tweet = new Tweet({
        content: req.body.content
    });

    tweet = await tweet.save();
    res.send(tweet);
});

// DELETE a given tweet
router.delete(':/id', async (req, res) => {
    const tweet = await Tweet.findByIdAndDelete(req.params.id);
    if (!tweet) return res.status(404).send('Tweet not found');
    res.send(tweet);
});

module.exports = router;
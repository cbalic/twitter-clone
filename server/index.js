const express = require('express');
const db = require('./config/db');
const tweets = require('./routes/tweets');

const app = express();

app.use(express.json());
app.use('/api/tweets', tweets);

app.get('/express_backend', (req, res) => {
    res.send({ express: 'Connected express server backend'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);

    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            console.error(err);
            res.json({message: 'Error writing file'});
            return;
        }

        res.json({message: 'Comment added'});
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
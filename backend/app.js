const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://layconsm:layconsm@cluster0.3m10j.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  })
  .catch(() => {
    console.log('CONNECTION FAILED');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//ADDING HEADERS FOR CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET", "POST", "PATCH", "DELETE", "OPTIONS"
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!"
  });
});

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'Posts fetched successfully!',
      posts: documents
    });
  });
});

module.exports = app;

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fadf12421l',
      title: 'First server-side post',
      content: 'This is coming from the server side'
    },
    {
      id: 'sadf32422l',
      title: 'Second server-side post',
      content: 'This is coming from the server side too'
    }
  ];
res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;

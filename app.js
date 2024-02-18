const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const postsRouter = require('./routes/posts'); 

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://renwarrior1240:mYnckI44q5IUnnnB@cluster0.hb0wcuz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.use(express.static(path.join(__dirname, 'blog-frontend/dist/blog-frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog-frontend/dist/blog-frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

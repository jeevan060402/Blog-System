const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for creating, updating, and deleting posts

module.exports = router;

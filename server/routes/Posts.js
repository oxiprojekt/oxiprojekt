const express = require("express");
const router = express.Router();
const { Posts } = require("../models");


router.get("/", async (req, res) => {
  try {
    // Fetching posts and excluding 'createdAt' and 'updatedAt' columns
    const listOfPosts = await Posts.findAll({
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'] // Excluding these fields
      }
    });

    res.json(listOfPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/", async (req, res) => {
//   const post = req.body;
//   await Posts.create(post);
//   res.json(post);
// });

module.exports = router;

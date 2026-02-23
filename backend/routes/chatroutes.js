const express = require("express");
const router = express.Router();
const Chat = require("../models/chat");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Chat route working" });
});

// Save message
router.post("/send", async (req, res) => {
  try {
    const { message } = req.body;

    const newChat = new Chat({ message });
    await newChat.save();

    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
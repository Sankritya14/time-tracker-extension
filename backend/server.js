const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserData = require("./models/UserData");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/timetracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// POST route to save tracking data
app.post("/track", async (req, res) => {
  const { url, duration, category } = req.body;
  try {
    const data = new UserData({ url, duration, category });
    await data.save();
    res.status(200).json({ message: "Data saved" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// GET route to fetch weekly data (basic version)
app.get("/weekly", async (req, res) => {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const data = await UserData.find({ timestamp: { $gte: oneWeekAgo } });
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

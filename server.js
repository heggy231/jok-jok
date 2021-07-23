require('dotenv').config();
const express = require("express");

const app = express();
const {PORT} = process.env;

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.listen(PORT, () => {
  console.log(`port running at http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.listen(PORT, () => {
  console.log(`port running at http://localhost:${PORT}`);
});

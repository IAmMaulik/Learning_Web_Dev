const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.sendFile(__dirname + "/weekend.html");
  } else {
    res.sendFile(__dirname + "/weekday.html");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

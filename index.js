const express = require("express");
const app = express();
const cors = require("cors");
const courseContent = require("./data/course.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Hay if You're finding (codism-co) server, Then you're in Right place"
  );
});

app.listen(5000, () => console.log("YAAY!! server is running at 5000"));

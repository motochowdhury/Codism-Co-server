const express = require("express");
const app = express();
const cors = require("cors");
const courseContent = require("./data/course.json");
const courseCat = require("./data/courseCategories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Hay if You're finding (codism-co) server, Then you're in Right place"
  );
});

app.get("/categories", (req, res) => {
  res.send(courseCat);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const content = courseContent.find((currContent) => currContent.id === id);

  res.send(content);
});
app.listen(5000, () => console.log("YAAY!! server is running at 5000"));

const express = require("express");
const path = require("path");
const compression = require("compression");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const projectRoutes = require("./server/router/project_router");
const app = express();

//authentication into db
mongoose.connect(
  "mongodb://jayyhong:Cactus123@ds125588.mlab.com:25588/tysportfolio",
  function(err) {
    if (err) return console.log(err);
    console.log("Connected to MongoDB");
  }
);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "./dist")));

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("server successfully connected on " + PORT);
});

//route middleware
app.use("/api/projects", projectRoutes);

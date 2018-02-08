const express = require("express");
const path = require("path");
const compression = require("compression");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const projectRoutes = require("./server/router/project_router");
const uploadRoutes = require("./server/router/upload_router");
const router = express.Router();
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

app.use(function(req, res, next) {
  //set headers to allow cross origin request.
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log("server successfully connected on " + PORT);
});

//route middleware
app.use("/api/projects", projectRoutes);
app.use("/api/upload", uploadRoutes);

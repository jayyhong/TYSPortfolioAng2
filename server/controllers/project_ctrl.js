var Project = require("../models/project");

module.exports = {
  index: function(req, res) {
    Project.find({}).exec(function(err, projects) {
      if (err) return console.log(err);
      res.json({ success: true, message: "all projects", projects: projects });
    });
  },

  create: function(req, res) {
    console.log("create invoked from backend");
    console.log(req.body);
    var newProject = new Project(req.body);
    newProject.save(function(err, project) {
      if (err) {
        return console.log("Error posting new project");
      }
      res.json({ success: true, message: "New Project Created" });
    });
  }

};

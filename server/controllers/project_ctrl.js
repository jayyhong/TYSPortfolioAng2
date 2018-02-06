var Project = require("../models/project");

module.exports = {

  index: function(req, res) {
    Project
      .find({})
      .exec(function(err, projects) {
        if (err) return console.log(err);
        res.json({ sucess: true, message: "all projects", projects: projects });
      });
  },

  create: function(req, res) {
    console.log('create invoked from backend')
    console.log(req.params)
  }

};

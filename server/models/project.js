var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema({
  category: { type: String, required: true, unique: false },
  name: { type: String, required: true, unique: false },
  thumbnail: { type: String, required: true, unique: false },
  screenshot: { type: String, required: false, unique: false },
  mobileScreenshot: { type: String, required: false, unique: false },
  designers: { type: [], required: false, unique: false }
})

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
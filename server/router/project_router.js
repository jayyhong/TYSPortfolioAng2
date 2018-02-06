const express = require('express');
const projectRouter = express.Router();

const ProjectController = require('../controllers/project_ctrl');

projectRouter.get('/', ProjectController.index);

module.exports = projectRouter;
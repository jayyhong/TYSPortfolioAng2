const express = require('express');
const uploadRouter = express.Router();

const UploadController = require('../controllers/upload_ctrl');
// const multer = require('multer');

// let DIR = './uploads/'
// let upload = multer({dest: DIR}).single('photo');

uploadRouter.post('/', UploadController.upload);

module.exports = uploadRouter;
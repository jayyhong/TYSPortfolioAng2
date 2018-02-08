const multer = require('multer');

let DIR = './dist/assets/img/uploads/';
let upload = multer(
  {
    dest: DIR
  }
).single('photo');

module.exports = {
  
  upload: function(req, res, next) {
    let path = "";
    upload(req, res, err => {
      if (err) {
        console.log(err);
        return res.status(422).send("an Error occured");
      }
      console.log(req.file.path)
      path = req.file.path;
      return res.send(path);
    });
  }

};

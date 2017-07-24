var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    bcrypt = require('bcrypt'),
    multer = require('multer');

module.exports = {

    index: function (req, res) {
        Users.find({}, function (user_errs, users) {
            if (user_errs) {
                console.log('users were not found')
                res.json({ users: [] });
            }
            else {
                res.json({ users: users });
            }
        })
    },
    new: function (req, res) {
        Users.findOne({ email: req.body.email }, function (findOneErr, User) {
            if (findOneErr === null) {
                console.log("If working!")
                var user = new Users({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    birthday: req.body.bDay
                });
                user.save(function (err) {
                    if (err) {
                        console.log(err)
                        res.json({ message: err, success: false })
                    }
                    else {
                        res.json({ message: 'User successfully created!', success: true, user_id: user._id})
                    }
                })
            }
            else {
                res.json({ message: "user already exists!", success: false})
            }
        })
        // var hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));



    },

    login: function (req, res) {
        Users.findOne({ email: req.body.email }, function(loginError, user){
          if (user === null){
              console.log('User not found')
              res.json({success:false, message:"No account with email: " + req.body.email}) 
          }
          else{
              
              if(bcrypt.compareSync(req.body.password, user.password)){
                  res.json({success:true, user_id: user._id})
              }
              else{
                  res.json({success: false, message:"Password is not correct"})
              }
          }
        })

    },

    uploadImage: function (req, res){
        upload(req, res, function(err){
            console.log(req.file);
            if (err){
                console.log(err)
            }
            new File
            res.json({success: true, message:"Image was uploaded!"})
            // console.log(filePath);
        })
    }
}


var dict = { 'image/png' : ".png" }

var storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename : function (req, file, cb){
        var upload = new Upload({})
        upload.save(function () {
            // upload._id
        });
        console.log(file.fieldname);
        var filePath = file.fieldname + '-' + Date.now() + dict[file.mimetype]
        // returnFilePath(filePath)
        cb(null, filePath)
    }
});

var upload = multer({storage : storage}).single('myImages');


function returnFilePath(filepath){
    return filepath
}

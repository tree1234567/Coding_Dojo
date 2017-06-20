var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    bcrypt = require('bcrypt');

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

    }


}
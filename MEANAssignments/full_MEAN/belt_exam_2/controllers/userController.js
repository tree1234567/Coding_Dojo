var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    Questions = mongoose.model('Questions'),
    Results = mongoose.model("Results"),
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

    },
    newQuestion: function(req,res){
        Questions.findOne({question: req.body.question}, function(findErr, question){
            if (question === null){
                console.log(req.body)
                var question = new Questions({
                    question : req.body.question,
                    answer : req.body.correct,
                    fakeAnswerOne : req.body.fakeOne,
                    fakeAnswerTwo: req.body.fakeTwo
                })
                question.save(function(saveErr){
                    if (saveErr){
                        console.log("Question Create failed!")
                        res.json({message:"Question Failed to be created", success: false})
                    }else{
                        res.json({message:"Question Created!", success:true, score:"Question successfully Created!"})

                    }
                })
            }else{
                res.json({success: false, message:"question already exists!"})
            }
        })
    },
    getQuestions : function(req,res){
        Questions.aggregate([{$sample : {size: 3}}], function(findErr, questions){
            if (findErr){
                console.log("something broke")
                res.json({message:"questions failed to load", success: false})
            }else{
                res.json({questions: questions, success:true});
            }
        })
        
    },
    make_result: function (req, res){
        console.log(req.body)
        var count = 0
        Questions.findOne({_id: req.body.questionOneId},function(firstQErr, question1){
            if (question1.answer == req.body.questionOne){
                count +=1
                console.log(count)
            }
            Questions.findOne({_id: req.body.questionTwoId}, function(secondQErr, question2){
                if (question2.answer == req.body.questionTwo){
                    count+=1
                    console.log(count)
                }
            })
            Questions.findOne({_id: req.body.questionThreeId}, function(thirdQErr, question3){
                if (question3.answer == req.body.questionThree){
                    count+=1
                    console.log(count)
                }
                var result = new Results({
                    score : count,
                    _user: req.body.user_id
                })
                result.save(function(saveErr){
                    res.json({success:true, score: count})
                })
            })

        })
    },
    get_results : function(req,res){
        Results.find({}).populate("_user").exec(function(findErr, results){
            if (findErr){
                res.json({results:[]})
            }else{
                res.json({results: results})
            }
        })
    }


}
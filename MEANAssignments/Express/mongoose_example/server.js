var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
    name: {type: String, minlength: 2,  maxlength: 20},
    age: {type: Number, min:18, max:100}
});

mongoose.model('User', userSchema);
var User = mongoose.model('User');

app.get('/', function(req,res){
    User.find({}, function(err, users){
        if (err){
            console.log('something went wrong BRUH!')
           
        }
        else{
            console.log("working!")
            res.render("index", {users: users}) 
        }
    })
   
})

app.post('/users', function(req,res){
    console.log("POST DATA: ",req.body);

    var user = new User({name: req.body.name, age: req.body.age});

    user.save(function(err){
        if (err){
            console.log('something went wrong yo!');
            User.find({},function(err1,users){
                if (err1){
                    console.log('users didnt render')
                }
                else{
                     res.render("index", {errors: user.errors, users:users});
                }
            })
           
        }
        else{
            console.log('The user was added!');
            res.redirect('/');
        }
    })

    
});

app.listen(8000, function(){
    console.log('listening on port 8000')
})
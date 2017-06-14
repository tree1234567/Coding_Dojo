var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard')
app.use(bodyParser.urlencoded({entended: true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', "ejs");
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    quote:{type: String, minlength: 5},
    }, 
    {timestamps:true}
)

mongoose.model('User', UserSchema);

var User = mongoose.model('User');




app.get('/',function(req,res){
    res.render("index")
})

app.get('/quotes', function(req,res){
    User.find({}, function(err, users){
        if (err){
            console.log("users didnt load")
        }
        else{
            res.render('quotes', {users: users})
        }
    });
});


app.post('/:id/delete',function(req,res){
    User.remove({_id: req.params.id }, function(err, result){
        if (err){console.log('delete didnt work!')}
        res.redirect('/quotes');
    })



})








app.post('/quotes',function(req,res){

    var user = new User({name: req.body.name, quote: req.body.quote});

    user.save(function(err){
        if (err){
            res.render('index', {errors: user.errors})
        }
        else{
            res.redirect('/quotes')
        }
    });
});


app.listen(8000, function(){
    console.log('listenig on port 8000')
})
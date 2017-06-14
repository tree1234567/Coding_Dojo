var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;



// --------------------Creating Schema and object variables ----------------------------
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({

    text: { type: String, required: true },
    name: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true })

mongoose.model('Post', postSchema);
var Post = mongoose.model('Post');

var commentSchema = new mongoose.Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true },
    text: { type: String, required: true }
}, { timestamps: true });

mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');

// ------------------------------------------------------------------------------------

//----------------------ROUTING-----------------------------------

app.get('/', function (req, res) {

    Post.find({}, function (err, posts) {
        if (err) {
            console.log('Post unable to load')
            res.render('index', { posts: [] })
        }
        else {
            Comment.find({}, function (err,posts, comments) {
                if(err){
                    console.log('index not loading!')
                }
                else{
                res.render('index', { posts: posts, comments: comments })
                }
            })
        }
    })
})

app.post('/newpost', function (req, res) {
    var post = new Post({ text: req.body.contents, name: req.body.name })

    post.save(function (err) {
        if (err) {
            console.log('fuck! it didnt work!')
        }
        else {
            console.log("created")
            res.redirect('/')
        }
    });
});


app.post('/posts/:id', function (req, res) {
    Post.findOne({ _id: req.params.id }, function (err, post) {
        var comment = new Comment({ name: req.body.name, text: req.body.comment });
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function (err) {
            post.save(function (err) {
                if (err) { console.log("An error occured!") }
                else {
                    console.log("working")
                    res.redirect('/')
                }
            })
        })
    })
});




// -------------------------------------------------------------

app.listen(8000, function () {
    console.log('listening on port 8000')
})
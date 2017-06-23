var mongoose = require('mongoose'),
    Schema = mongoose.Schema


topicSchema = new mongoose.Schema({

    _author : {
        type: Schema.Types.ObjectId, ref: "Users"
    },
    topic : {
        type: String,
        required: true,
        minlength: [2, "too short!"]
    },
    description: {
        type: String,
        required: true,
        minlength: [2, 'too solid']
    },
    category:{
        type: String,
        required : true,
        minlength: [2, 'too solid'],
    },
    _topicPosts: [ {type: Schema.Types.ObjectId, ref: "Posts"}]


})

mongoose.model("Topics", topicSchema)
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,


postSchema = new mongoose.Schema({

    _author: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
    content: {
        type: String,
        required: true,
        minlength: [2, "This name is either not present or too short"]
    },
    upvotes: {
        type: Number,
        required: true,
        min : 0
    },
    _comments : [{type: Schema.Types.ObjectId, ref: 'Comments'}]
    

})


mongoose.model("Posts", postSchema)
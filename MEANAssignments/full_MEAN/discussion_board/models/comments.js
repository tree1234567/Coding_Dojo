var mongoose = require('mongoose'),
    Schema = mongoose.Schema


commentSchema = new mongoose.Schema({
    _author : {
        type: Schema.Types.ObjectId, ref:"Users"
    },
    content: {
        type: String,
        required : true,
        minlength: [2,"too short!"]
    }
})

mongoose.model("Comments", commentSchema)
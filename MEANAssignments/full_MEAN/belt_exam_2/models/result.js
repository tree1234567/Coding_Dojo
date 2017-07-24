var mongoose = require('mongoose'),
    Schema = mongoose.Schema


resultSchema = new mongoose.Schema ({

    score : {
        type: Number,
        required: true,
    },
    _user : {
        type: Schema.Types.ObjectId, ref: "Users" 
    }
})

mongoose.model('Results', resultSchema);




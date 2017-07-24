var mongoose = require('mongoose'),
    Schema = mongoose.Schema,



questionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true,
        minlength: [15, "This question is too short!"],
        unique : true
    },

    answer : {
        type: String,
        required: true,
        minlength: [5, "answer too short!"]
    },
    fakeAnswerOne : {
        type: String,
        required: true,
        minlength: [5, "Fake answer too short!"]
    },
    fakeAnswerTwo : {
        type: String,
        required: true,
        minlength: [5, "Fake answer too short!"]
    }


})


mongoose.model('Questions', questionSchema);



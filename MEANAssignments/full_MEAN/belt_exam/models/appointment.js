var mongoose = require('mongoose'),
    Schema = mongoose.Schema

appointmentSchema = new mongoose.Schema({

    date: {
        type: Date,
        required: true,
        unique: true,
    },
    complaint: {
        type: String,
        required: true,

    },
    _user: {type: Schema.Types.ObjectId, ref : "Users"}

})

mongoose.model('Appointments', appointmentSchema);
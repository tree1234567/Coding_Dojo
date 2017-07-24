var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');


userSchema = new mongoose.Schema({
    // email, first and last name, password, password_confirm, birthday
    firstName: {
        type: String,
        required: true,
        minlength: [2, "This name is either not present or too short"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, "This name is either not present or too short"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                console.log(emailRegex.test(email))
                return emailRegex.test(email);
            },
            message: 'This email, is not in proper format!'
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100,
        validate: {
            validator: function (password) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(password);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    birthday: {
        type: Date,
        max: Date('1965-01-13'),
        min: Date('1998-01-13'),
        required: false,
    },





}, { timestamps: true });

userSchema.pre('save', function (done) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
})

// or 'bcrypt' on some versionsCopy

mongoose.model('Users', userSchema);

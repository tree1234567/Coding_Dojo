var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    Appointments = mongoose.model('Appointments')
bcrypt = require('bcrypt');

module.exports = {

    index: function (req, res) {
        Users.find({}, function (user_errs, users) {
            if (user_errs) {
                console.log('users were not found')
                res.json({ users: [] });
            }
            else {
                res.json({ users: users });
            }
        })
    },


    new: function (req, res) {
        Users.findOne({ email: req.body.email }, function (findOneErr, User) {
            if (findOneErr === null) {
                console.log("If working!")
                var user = new Users({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    birthday: req.body.bDay
                });
                user.save(function (err) {
                    if (err) {
                        console.log(err)
                        res.json({ message: err, success: false })
                    }
                    else {
                        res.json({ message: 'User successfully created!', success: true, user_id: user._id })
                    }
                })
            }
            else {
                res.json({ message: "user already exists!", success: false })
            }
        })
        // var hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));



    },


    login: function (req, res) {
        Users.findOne({ email: req.body.email }, function (loginError, user) {
            if (user === null) {
                console.log('User not found')
                res.json({ success: false, message: "No account with email: " + req.body.email })
            }
            else {

                if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.json({ success: true, user_id: user._id })
                }
                else {
                    res.json({ success: false, message: "Password is not correct" })
                }
            }
        })

    },


    getAll: function (req, res) {
        Appointments.find({})
            .populate("_user")
            .exec(function (popErr, appointments) {
                if (popErr) {
                    console.log("fdsafds")
                } else {
                    console.log(appointments)
                    res.json({ appointments: appointments })
                }
            })
    },


    newAppointment: function (req, res) {
        // console.log(req.body);
        var date = new Date()
        var isoStr = date.toISOString();
        if (isoStr < req.body.date) {
            var hour = req.body.date.slice(11, 13)
            var hour = hour - 5
            if (hour > 17 || hour < 8) {
                res.json({ message: "Appointment needs to be within hours of operation (8am-5pm)", success: false })
            } else {
                if (!req.body.complaint) {
                    res.json({ message: "Please fill out your symptoms", success: false })
                } else {

                    var appointment = new Appointments({
                        _user: req.body.user_id,
                        date: req.body.date,
                        complaint: req.body.complaint

                    })
                    appointment.save(function (appSaveErr) {
                        if (appSaveErr) {
                            res.json({ message: 'That time slot is already taken', success: false })
                        } else {
                            res.json({ success: true })
                        }
                    })


                }
            }
            // console.log(hour, req.body.date);
        } else {
            res.json({ message: 'Appointments need to booked at least 1 day in advance', success: false })
        }

    },

    delete: function (req, res) {
        Appointments.findOne({ _id: req.body.appID }, function (findErr, appointment) {
            if (findErr) {
                res.json({ success: false, message: 'could not find appointment!' })
            } else {
                var date = new Date();
                appMonISO = appointment.date
                var appMon = String(appointment.date)
                appMon = appMon.slice(4, 7)
                console.log(appMon)

                if (appMon == 'Jun') {
                    if (appMonISO.getDate() > date.getDate()) {
                        Appointments.remove({ _id: req.body.appID }, function (deleteErr) {
                            if (deleteErr) {
                                res.json({ success: false, message: "Something went wrong" })
                            } else {
                                res.json({ success: true })
                            }
                        })

                    } else {
                        res.json({ success: false, message: 'Appointments cannot be deleted after or the day of' })
                    }
                } else {
                    Appointments.remove({ _id: req.body.appID }, function (deleteErr) {
                        if (deleteErr) {
                            res.json({ success: false, message: "Something went wrong" })
                        } else {
                            res.json({ success: true })
                        }
                    })


                }
            }
        })
    }



}


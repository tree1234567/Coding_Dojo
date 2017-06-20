var mongoose = require("mongoose");

var Messages = mongoose.model('Messages');
var Comments = mongoose.model('Comments');


module.exports = {

    index: function (req, res) {
        Messages.find({}).populate("_comments").exec(function (message_errs, messages) {
            if (message_errs) { 
                console.log('messages could not render') 
                res.json({messages : []})
            }
            else {
                // console.log(messages[0]._comments.length)
                // console.log('messages found!')
                res.json({ messages: messages });

            }
        })
    },

    new: function (req, res) {
        var message = new Messages({ name: req.body.name, message: req.body.message });
        message.save(function (err) {
            if (err) { 
                res.json({message: "failure"})
                
        }
            else {
                // console.log('Message was created.. Id is: ' +  message.id);
                res.json({message: "suceess"});
            }
        });
    },

    newComment: function (req, res) {
        // console.log(req.params.message_id)

        //FIND THE MESSAGE FROM ROUTE
        Messages.findOne({ _id: req.params.message_id }, function (findMessageErr, message) {
            if (findMessageErr) { console.log('could not find message with Id: ' + req.params.message_id) }
            else {
                console.log(message._id)
                //CREATE THE NEW COMMENT FOR FOUND MESSAGE
                var comment = new Comments({ name: req.body.name, comment: req.body.comment })

                //SET THE FOREIGN KEY OF COMMENT TO MESSAGE ID
                comment._message = message._id;


                comment.save(function (commentCreateErr) {
                    if (commentCreateErr) { console.log('comment failed to be made') }
                    else {
                        // UPDATE MESSAGE'S COMMENT ARRAY TO INCLUDE THE NEW COMMENT ID 
                        Messages.update({ _id: req.params.message_id }, { $push: { "_comments": comment } }, function (messageKeyErr) {
                            if (messageKeyErr) {
                                res.json({message: "failure"});
                            }
                            else {
                                console.log('comment was successfully made')
                                res.json({message: "suceess"});
                            }
                        })


                    }
                })

            }
        })

    }
}
var mongoose = require("mongoose");

var Messages = mongoose.model('Messages');
var Comments = mongoose.model('Comments');
var Replies = mongoose.model('Replies');


module.exports = {

    index: function (req, res) {
        var promise = Messages.find({}).populate("_comments _replies")
       promise.then(function (messages) {
                console.log(messages)
                res.json({ messages: messages });

            
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

    },
    newReply: function(req,res){
        Comments.findOne({_id: req.params.comment_id}, function(findCommentErr, comment){
            if (findCommentErr){
                console.log('could not find comment with Id:' + req.params.comment_id)
            }else{
                console.log(comment._id)
                var reply = new Replies({name: req.body.name, reply: req.body.reply})
                reply._comment = comment._id
                reply.save(function(replyCreateErr){
                    if (replyCreateErr){
                        console.log("it didnt work")
                    }else{
                        Comments.update({_id: req.params.comment_id}, {$push: {"_replies": reply}},function(commentKeyErr){
                            if(commentKeyErr){
                                console.log('comment reply failed')
                            }else{
                                console.log('reply was successfully attached to comment!')
                                res.json({message: 'success'});
                            }
                        })
                    }
                })
            }
        })
    }
}
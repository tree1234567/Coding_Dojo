var mongoose = require('mongoose');

var Secrets = mongoose.model('Secrets')

module.exports= {

    index: function(req,res){
        console.log("hit index")
        Secrets.find({}, function(getSecretsError, secrets){
            if(getSecretsError){
                console.log('Secrets did not load');
                res.json({secrets: []})
            }else{

                res.json({secrets: secrets});

            }

        })
    },






















    
    create: function(req,res){
        console.log('hit create')
        var secret = new Secrets({secret: req.body.secret})
        secret.save(function(err){
            if (err){ console.log("didnt create new secret")}
            else{
                res.json({message:'success'})
            }
        })
    }








}
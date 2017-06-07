// get the http module:

var my_mathMod = require('./my_mathMod')();

console.log(my_mathMod.add(1,5))
console.log(my_mathMod.multiply(3,3));
console.log(my_mathMod.square(4));
console.log(my_mathMod.random(25));



var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
            my_mathMod.random(5);
        });
    }
    else if (request.url === '/style.css'){
         fs.readFile('style.css', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/style.css'){
         fs.readFile('style.css', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/main.js'){
         fs.readFile('main.js', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/jquery.js'){
         fs.readFile('../bower_components/jquery/dist/jquery.js', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/ninjas'){
        fs.readFile('ninjas.html', "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/dojos/new'){
        fs.readFile('new.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Cotent-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }







    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('NOT FOUND!!');
    }
});
// tell your server which port to run on
server.listen(9000);
// print to terminal window
console.log("Running in localhost at port 9000");
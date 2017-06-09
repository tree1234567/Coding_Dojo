$(document).ready(function(){
    var socket = io.connect();
    $('button').on('click',function(){
        // console.log('hello!fdafljsdlkfjsa');
        socket.emit('button_clicked')
        
    })
    socket.on('server_response', function(data){
        console.log('The server returned!')
        console.log(data.blah)
        $('#count').html('Count is: ' + data.blah)
        

    })
    

})
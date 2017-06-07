// our test object
var customObject = {
  
  name:'California, Eureka',
  onClick: function(){
    console.log("I've been clicked");
    console.log(this.name);
  }
}

var newObject = {
  name:"West Virginia,  Montani semper liberi"
}

// customObject.onClick.bind(newObject)

// our behavior on click.
// $(document).ready(function(){
  // console.log('working!daf')

$('#button').click(function(){
  customObject.onClick();
});

$('#button').mouseenter(function(){
  $('#button').addClass('green')
}).mouseleave(function(){
  $('#button').removeClass('green')
});
  
// });
$('button').click(customObject.onClick.bind(newObject));
// var newObject = {
  // name:"West Virginia,  Montani semper liberi"
// }
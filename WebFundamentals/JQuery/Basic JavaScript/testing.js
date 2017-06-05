// function strdups(str){
//    var new_arr = str.split(' ')
//    var dict = {}
//    for (var x=0; x<new_arr.length; x+=1){
//        dict[key] == new_arr[x] ? dict[new_arr[x]] +=1 : dict[new_arr[x]] = 1     
//    }
//    new_str = ""
//    for(var key in dict){
//        new_str += key + " "
//    }
//    return new_str
// }

// var str = "Hello Hello Bye Bye Hello"

// console.log(strdups(str))


// function Apple (type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = getAppleInfo;
// }
 
// // anti-pattern! keep reading...
// function getAppleInfo() {
//     return this.color + ' ' + this.type + ' apple';
// }

// var apple = new Apple('macintosh');
// console.log(apple)
// console.log(apple.getInfo())
// apple.color = "reddish";
// console.log(apple.getInfo())

function Node(val){
    this.val = val
    this.next = null
}


function Queue(head=null){
  this.head = head
  
  this.enqueue = function enqueue(val){
    if (this.head == null){
        this.head = new Node(val)
        return this.head
    }
    else{
    var current = this.head;
    while(current.next){
      current= current.next
    }
    current.next = new Node(val)
    return this.head
  }
}
  
  this.dequeue = function dequeue(){
      var current = this.head
      this.head= this.head.next
      current.next = null
      return current.val
  }

  this.contain = function contain(val){
      var current = this.head
      var flag = false
      while(current.next){
          if (current.val == val){
              flag = true
        }
        current = current.next
        }
        return flag
    }

  function front(){
      return this.head.val
  }
  function isEmpty(){
      if (this.head.val == nul){
          return true
      }
      else{
          return false
      }
  }

  function size(){
      var current = this.head
      var count = 0 
      while(current.next){
          count += 1 
          current = current.next
      }
      return count
  }



}

var x = new Queue
x.enqueue(2)
x.enqueue(3)
x.enqueue(4)
x.enqueue(24)
console.log(x.contain(2))































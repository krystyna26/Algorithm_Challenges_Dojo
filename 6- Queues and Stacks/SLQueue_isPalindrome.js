
function Node(value){
    this.value = value;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
}

function Stack(){
    this.count = 0;
    this.storage = [];
}

Stack.prototype.pushStack = function(value){
    
		this.storage.push(value);
    this.count ++;
    return this;
}

Stack.prototype.popStack = function(){
    // check to see if the stack is empty
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    return this.storage.pop();
}


SLQueue.prototype.front = function() {
  return this.head.value;
}
// A, B, A

SLQueue.prototype.isPalindrome = function(){
    console.log("here")
  var myStack = new Stack();
  var curr = this.head
//   for(var i = 0; i< this.size(); i++){
    console.log("curr.val: " , curr.value)
    
  while(curr){
     	myStack.pushStack(curr.value);
      curr = curr.next;
  }
  console.log("myStack: ", myStack)

  curr = this.head;
  while(curr) {
    var value = myStack.popStack();
    console.log("Val: ", value);
    if (value != curr.value) {
      return false;
    } 
  	curr = curr.next;
  } // end of while
    return true;
}

var list1 = new SLQueue();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(2);
var node4 = new Node(1);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log("list1:",list1);

// list1.display();
console.log("Queue isPalindrome",list1.isPalindrome());

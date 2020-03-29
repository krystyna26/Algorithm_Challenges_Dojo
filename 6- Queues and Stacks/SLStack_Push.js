function Node(value) {
  this.value = value;
  this.next = null;
}
function SLQueue() {
  this.head = null;
  this.tail = null;
}

function Stack() {
  this.count = 0;
  this.storage = {};
  this.display = function() {
    var current = this.head;
    var string = "Stack values: ";
    while (current.next) {
      string += current.value + " -> ";
      current = current.next;
    }
    string += current.value;
    console.log(string);
    return this;
  };
}

// add value to stack
SLQueue.prototype.pushStack = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
    return this;
  }
  var temp = this.head;
  this.head = new Node(val);
  this.head.next = temp;
  return this;
};

var list1 = new SLQueue();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("--------Before--------");
list1.display();
console.log("--------After--------");
list1.pushStack(5);
list1.display();

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

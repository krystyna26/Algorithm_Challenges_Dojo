function Node(value) {
  this.value = value;
  this.next = null;
}

function SLQueue() {
  this.head = null;
  this.tail = null;
  this.display = function() {
    var current = this.head;
    var string = "Queue values: ";
    while (current.next) {
      string += current.value + " -> ";
      current = current.next;
    }
    string += current.value;
    console.log(string);
    return this;
  };
}

SLQueue.prototype.sizeStack = function(stack1) {
  if (stack1.head === null) {
    return 0;
  }
  var count = 0;
  current = stack1.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
};

function Stack() {
  this.count = 0;
  this.top = null;
  this.storage = {};
}
// Returns the length of the stack
Stack.prototype.size = function() {
  return this.count;
};

var list1 = new Stack();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("Stack size:", list1.size());

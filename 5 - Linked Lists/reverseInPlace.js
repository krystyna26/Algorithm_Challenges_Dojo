function Node(value) {
  this.value = value;
  this.next = null;
}

function SLList() {
  this.head = null;
  this.display = function() {
    var current = this.head;
    var string = "Node values: ";
    while (current.next) {
      string += current.value + " -> ";
      current = current.next;
    }
    string += current.value;
    console.log(string + " -> null");
    return this;
  };
}

SLList.prototype.reverseInPlace = function() {
  if (!this.head) {
    return null;
  }
  var curr = this.head;
  var prev = null;
  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  this.head = prev;
  return this;
};

var list1 = new SLList();
var node1 = new Node(1);
var node2 = new Node(3);
var node3 = new Node(5);
var node4 = new Node(2);
var node5 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("--------Before--------");
list1.display();

list1.reverseInPlace();
console.log("--------After reverse--------");
list1.display();

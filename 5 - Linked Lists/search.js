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
    console.log(string);
    return this;
  };
}

// O(n)
SLList.prototype.search = function(num) {
  if (this.head === null) {
    console.log("NO LIST FOUND");
    return false;
  }
  var curr = this.head;
  while (curr.next !== null && curr.value !== num) {
    curr = curr.next;
  }
  if (curr.next == null && curr.value !== num) {
    console.log("NO MATCHING VALUE FOUND");
  } else {
    console.log("Value:", num, "was found in a given node!");
    return curr.value;
  }
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
// Node values: 1 -> 3 -> 5 -> 2 -> 4 -> null

list1.search(3);

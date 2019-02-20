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

// split list in two and return list from the given value
SLList.prototype.splitOnValue = function(num) {
  if (!this.head || this.head.value == num) {
    console.log("No node!");
    return this;
  }
  var back = this.head;
  var prev = this.head;
  var front = prev.next;

  if (front === null) {
    console.log("No more nodes found matching split value!");
    return this;
  }

  while (front !== null && front.value !== num) {
    front = front.next;
    prev = prev.next;
  }
  if (front.value == num) {
    this.head = front;
    prev.next = null;
    // console.log("BACK LIST", back);
    // console.log("FRONT LIST", this.head);
    return this.head;
  } else {
    console.log('NO "NUMBER TO SPLIT" FOUND');
    return false;
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

console.log("--------Before--------");
list1.display();

console.log("--------After split--------");
list1.splitOnValue(5);
list1.display();

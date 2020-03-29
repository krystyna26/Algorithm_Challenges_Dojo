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
      string += current.value + ", ";
      current = current.next;
    }
    string += current.value;
    console.log(string);
    return this;
  };
}

SLList.prototype.maxFront = function() {
  if (this.head == null) {
    return this;
  } else {
    var max = this.head;
    var current = this.head;
    var prev = this.head;
    while (current.next) {
      if (current.next.value > max.value) {
        max = current.next;
        prev = current;
      }
      current = current.next;
    }

    if (max == this.head) {
    } else {
      prev.next = max.next;
      max.next = this.head;
      this.head = max;
    }
  }
  console.log("Max value in given node: " + max.value);
  return this;
};

var list1 = new SLList();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

// console.log(list1);
// var x = list1.maxFront();
// console.log("maxFront",list1.display());

list1.display();
list1.maxFront();

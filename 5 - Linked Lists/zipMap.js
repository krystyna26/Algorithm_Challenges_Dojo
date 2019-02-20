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

// given two pointers to independent linked lists, 'zip' the two lists together
// by alternating nodes. Start with the first list and return the new combined list.
function zipMap(list1, list2) {
  if (!list1.head) {
    console.log("no list1 given");
    return list2;
  }
  if (!list2.head) {
    console.log("no list2 given");
    return list1;
  }

  var temp1 = list1.head.next;
  var holdHead2 = list2.head;
  var curr1 = list1.head;

  while (temp1 && holdHead2.next) {
    curr1.next = holdHead2;
    list2.head = holdHead2.next;
    holdHead2 = holdHead2.next;
    curr1 = curr1.next;
    curr1.next = temp1;
    curr1 = temp1;
    temp1 = curr1.next;
  }
  // list1 is shorter
  if (curr1.next === null) {
    curr1.next = list2.head;
    return list1;
  }

  // list2 is shorter
  if (holdHead2.next === null) {
    curr1.next = holdHead2;
    if (temp1) {
      curr1 = curr1.next;
      curr1.next = temp1;
    } else {
      return list1;
    }
  }
  if (temp1 === null) {
    console.log("temp is null");
    curr1.next = holdHead2;
  }
  console.log(list1);
  return list1;
}

var list1 = new SLList();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

var list2 = new SLList();
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
list2.head = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

console.log("--------Before--------");
list1.display();
list2.display();
zipMap(list1, list2);
console.log("--------After--------");
list1.display();

// https://codereview.stackexchange.com/questions/77682/zip-merge-two-linked-lists-together

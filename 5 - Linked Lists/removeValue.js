// function Node(value){
//     this.value = value;
//     this.next = null;
// }

// function SLList() {
//     this.head = null;
//     this.display = function () {
//         var current = this.head;
//         var string = "Node values: ";
//         while(current.next) {
//           string += current.value + " -> ";
//           current = current.next;
//         }
//         string += current.value;
//         console.log(string);
//         return this;
//     }
// }

// SLList.prototype.removeValue = function(val){
//     if(this.head.value === val){
// 		this.head = this.head.next;
// 		return;
// 	}
// 	var prev = null;
// 	var current = this.head;
// 	while(current.value != val){
// 		prev = current;
// 		current = current.next;
// 	}
//     prev.next = current.next;
// }

// Definition for singly-linked list:
function Node(x) {
  this.value = x;
  this.next = null;
}

function SLL() {
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

SLL.prototype.removeKFromList = function(l, k) {
  // empty list
  if (!l.head) {
    return false;
  }
  // first node == val
  if (l.head.value == k) {
    l.head = l.head.next;
    return;
  }
  var prev = null;
  var curr = l.head;
  while (curr.value != k) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;
  return;
};

var list1 = new SLL();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("--------Before--------");
list1.display();
list1.removeKFromList(list1, 7);
console.log("--------After--------");
list1.display();

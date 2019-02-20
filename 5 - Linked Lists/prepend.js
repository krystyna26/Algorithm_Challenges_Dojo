function Node(value) {
  this.value = value;
  this.next = null;
}

function SLList() {
  this.head = null;
  this.displayList = function() {
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

// insert a new node with newValue immediately before the node 'before'
// or at the end of lists if no node contains 'before' value
SLList.prototype.prependValue = function(beforeVal, newVal) {
  var newNode = new Node(newVal);
  if (!this.head) {
    this.head = newNode;
  } else {
    var current = this.head;
    if (current.value === beforeVal) {
      var temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    } else {
      while (current.next) {
        if (current.next.value === beforeVal) {
          var temp = current.next;
          current.next = newNode;
          newNode.next = temp;
          break;
        }
        current = current.next;
      }
      current.next = newNode;
    }
  }
  return this;
};

var list1 = new SLList();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3.4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("--------Before--------");
list1.displayList();
console.log("--------After--------");
list1.prependValue(8, 44);
list1.displayList();

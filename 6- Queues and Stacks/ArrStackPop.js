// =================== Stack from array ==========================
var stack = [];

function popArrayStack(stack) {
  this.items = stack;
  this.items.pop();
  return this.items.length ? this.items : "Array stack is empty";
}
var arr = [1, 2];
// console.log("Pop from array stack:", popArrayStack(arr));
// console.log("Pop from empty array stack:", popArrayStack([]));

function Stack() {
  this.head = null;
  this.count = 0;
  this.top = null;
  this.display = function() {
    var current = this.head;
    this.count = 1;
    var string = "Stack values: ";
    while (current.next) {
      this.top = current.next;
      string += current.value + " -> ";
      current = current.next;
      this.count += 1;
    }
    string += current.value;
    console.log(string, "Stack count: ", this.count, "Top: ", this.top);
    return this;
  };
}
// =================== Stack from linked list ==========================

function Node(value) {
  this.value = value;
  this.next = null;
}

Stack.prototype.add = function(val) {
  var myNode = new Node(val);
  var current = this.head;

  if (!this.head) {
    this.head = myNode;
    return myNode;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = new Node(val);
  return this;
};

var myStack = new Stack();
myStack.add(2);
myStack.add(4);
myStack.add(-10);

console.log("Stack created: ", myStack.display());

// remove and return top value
Stack.prototype.popStack = function() {
  var myStack = new Stack();
  if (this.count === 0) {
    console.log("Stack is empty!");
    return;
  }

  var current = this.head;
  var previous = null;
  while (current.next) {
    current = current.next;
    if (current.next === this.top) {
      previous = current;
    }
  }
  this.count--;
  var result = this.top;
  this.top = previous;
  this.top.next = null;
  return result;
};

console.log("--------Before--------", JSON.stringify(myStack));
console.log("Stack pop: ", myStack.popStack());
console.log("--------After--------", JSON.stringify(myStack));

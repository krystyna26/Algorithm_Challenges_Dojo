function Node(value){
    this.value = value;
    this.next = null;
}

function Stack(){
    this.count = 0;
    this.top = null;
    this.storage = {};
}

// remove and return top value
Stack.prototype.popStack = function(){
    // check to see if the stack is empty
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
    // or
    // var temp = this.top;
    // this.top = this.top.next;
    // this.size -= 1;
    // return temp;
}


// var stack1 = new Stack();
// stack1.storage = {one:1, two:2, three:3, four:4};

var list1 = new Stack();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("--------Before--------");
list1.popStack();
console.log("--------After--------");
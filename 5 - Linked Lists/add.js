// const Node = require('./_SLL');
// const SLList = require('./_SLL');

function Node(value){
    this.value = value;
    this.next = null;
}

function SLList() {
    this.head = null;
}

SLList.prototype.add = function(val){
    var myNode = new Node(val)
    var current = this.head;
    if(!this.head){
        this.head = myNode;
        return myNode;
    }
    while(current.next){
        current = current.next;
    }
    current.next = new Node(val);
    return this;
}

var mySLL = new SLList();
mySLL.add(2);
mySLL.add(4);
console.log(mySLL);

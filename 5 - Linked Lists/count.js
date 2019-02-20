// const Node = require('./_SLL');
// const SLList = require('./_SLL');

function Node(value){
    this.value = value;
    this.next = null;
}

function SLList() {
    this.head = null;
}

SLList.prototype.lengthOfSLL = function(){
    var current = this.head;
    var count = 0;
    while(current){
        count++;
        current = current.next;
    }
    return count;
}
    

var list1 = new SLList();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3.4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(list1);
console.log("length:",list1.lengthOfSLL());
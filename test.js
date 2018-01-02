function Node(value){
    this.value = value;
    this.next = null;
}
function SLList() {
    this.head = null;
}

function prependValue(beforeVal, newVal){
    
    if(!this.head){
        return false;
    }
    var prev = this.head;
    
    while(current){
        prev = prev.next;
        var after = prev.next;
        var newNode = new Node(newVal);
        newNode.next = after;
        prev.next = newNode
    }
    return this;
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
list1.prependValue(8, 44);
console.log(list1);
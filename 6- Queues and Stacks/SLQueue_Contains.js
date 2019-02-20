// return whether given value is within the stack
function Node(value){
    this.value = value;
    this.next = null;
}

function SLQueue(){
    this.head = null;
    this.tail = null;
    this.display = function () {
        var current = this.head;
        var string = "Queue values: ";
        while(current.next) {
          string += current.value + " -> ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
      }
}
SLQueue.prototype.queueContains = function(val){
    var current = this.head;
    if(current == null){
        return false;
    }
    while(current){
        if(current.val == val){
            return true;
        }
        current = current.next;
    }
    return false;
}
var list1 = new SLQueue();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

list1.display();
console.log(list1.queueContains(1));
console.log(list1.queueContains(5));
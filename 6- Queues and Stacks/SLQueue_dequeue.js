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

// remove and return value at the front of queue
SLQueue.prototype.dequeue = function(){
    if (!this.head) {
        console.log("Queue is empty");
        return this;
    }
    var temp = this.head;
    this.head = this.head.next;
    return temp.value;
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

console.log("--------Before--------");
list1.display();
console.log("--------After--------");
list1.dequeue();
list1.display();
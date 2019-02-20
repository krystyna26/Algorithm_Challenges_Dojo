// return the number of stacked value
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

SLQueue.prototype.queueSize = function(){
    var count = 1;
    var current = this.head;
    if(this.head == null){
        return 0;
    }
    if(this.head == this.tail){
        return 1;
    }
    while(current.next != null){
        count++;
        current = current.next;
    }
    return count;
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
console.log("Queue size",list1.queueSize());
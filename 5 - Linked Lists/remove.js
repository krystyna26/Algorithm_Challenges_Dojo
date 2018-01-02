function Node(value){
    this.value = value;
    this.next = null;
}

function SLList() {
    this.head = null;
    this.display = function () {
        var current = this.head;
        var string = "Node values: ";
        while(current.next) {
          string += current.value + ", ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
      }
}

SLList.prototype.removeFront = function(){
    if(this.head && this.head.next){
        this.head = this.head.next;
    }else{
        console.log("List is undefined or empty");
    }
    return this;
}
    

var list1 = new SLList();
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
console.log("--------After--------");
list1.removeFront();
list1.display();
function Node(value){
    this.value = value;
    this.next = null;
}

function SLL(){
    this.head = null;
    this.addNode = function(value){
        if(!this.head){
            this.head = new Node(value)
        }
        else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new Node(value)
        }
    }
    this.displayList = function () {
        var current = this.head;
        var string = "Node values: ";
        while (current.next) {
          string += current.value + ", ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
    }
}

SLL.prototype.reverseSLL = function(){
    if(!this.head || !this.head.next){
        return "We can't reverse empty single linked list";
    }
    var previous = this.head;
    var current = this.head.next;
    this.head['start'] = true;
    while(current){
        current['previous'] = previous;
        current = current.next;
        previous = previous.next;
    }
    this.head = previous;
    current = this.head;
    while(!current.start){
        current.next = current.previous;
        delete current.previous;
        current= current.next;
    }
    current.next = null;
    delete current.start;
    return this;
}

var myList = new SLL();
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);
myList.addNode(6);
myList.addNode(7);

myList.displayList();
myList.reverseSLL();

console.log("--------SLL after reverse: --------");
myList.displayList();
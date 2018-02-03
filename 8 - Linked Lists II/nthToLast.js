function DNode(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}

function DLL(){
    this.head = null;
    this.tail = null;
    // this.length = length;
    this.display = function() {
        var current = this.head;
        var string = "DLL values: ";
        while(current.next) {
            string += current.value + " <=> ";
            current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
    }
  }

// add to the end
DLL.prototype.add = function(val){
    var myNode = new DNode(val)
    if(this.head){
        this.tail.next = myNode;
        myNode.previous = this.tail;
        this.tail = myNode;
    }else{
        this.head = myNode;
        this.tail = myNode;
    }
    return myNode;
}

DLL.prototype.nthToLast = function(num){
    // remove n-th node from the last node in nodeList
    var count = 0;
    var current = this.head;
    while(current){
        count++;
        current = current.next
    }
    if(num > count){
        return false;
    }
    current = this.head;
    for(var i=0; i< count-num; i++){
        current= current.next;
    }
    return current.val;
}

var myDLL = new DLL();
myDLL.add(2);
myDLL.add(3);
myDLL.add(4);
myDLL.add(5);

console.log("--------DLL Before--------");
myDLL.display();
myDLL.nthToLast(2);
console.log("--------DLL Before--------");
myDLL.display()


function DLL(){
    this.head = null;
    this.tail = null;
}

function DNode(val){
    this.val = val;
    this.next = null;
    this.previous = null;
}

DLL.prototype.add = function(val){
    var myNode = new DNode(val)
    if(this.head){
        var temp = this.tail;
        this.tail = myNode;
        myNode.previous = temp;
        temp.next = myNode;
        // this.tail.next = node;
        // node.previous = this.tail;
        // this.tail = node;
    }else{
        this.head = myNode;
        this.tail = myNode;
    }
    return myNode;
}

DLL.prototype.searchNodeAt = function(position){
    var current = this.head;
    var count = 1;
    if(position < 1){
        return "Error"
    }
    while(count < position){
        current = current.next;
        count++;
    }
    return current;
}

DLL.prototype.insert = function(insertAfter, val){
    var myNode = new DNode(val);
    if(this.head){
        var current = this.head;
        while(current){
            if(current.val == insertAfter){
                var temp = current.next;
                if(temp){
                    current.next= myNode;
                    myNode.previous = current;
                    myNode.next = temp;
                    temp.previous = myNode;
                }else{
                    current.next = myNode;
                    myNode.next = current;
                    this.tail = myNode
                }
                return this;
            }
            current = current.next;
        }
    }else{
        this.add(val);
    }
}

DLL.prototype.delete = function(val){
    if(!this.head){
        return this;
    }else{
        var current = this.head;
        while(current){
            if(current.val == val){
                if(current == this.head){
                    var prevNode = current.previous;
                    var nextNode = current.next;
                    prevNode.next = nextNode;
                    nextNode.previous = prevNode;
                    current.next = null;
                    current.previous = null;
                    return this;
                }
                current = current.next;
            }
            return false;
        }
    }
}
// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
// finish from remove
DLL.prototype.clear = function(){
    // empty out the list
}

DLL.prototype.pop = function(){
    // remove final node
} 

DLL.prototype.display = function(){
    // string with all values in list
} 


var myDLL = new DLL()
myDLL.add(2)
myDLL.add(3)
myDLL.add(4)
myDLL.add(5)

console.log(myDLL)
myDLL.delete(2)
console.log(myDLL)

// https://stackoverflow.com/questions/31284954/doubly-linked-list-in-javascript
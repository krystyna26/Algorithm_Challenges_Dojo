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
                                            // works !
DLL.prototype.searchNodeAt = function(idx){
    var current = this.head;
    var count = 1;
    if(idx < 1){
        return "Error"
    }
    while(count < idx){
        current = current.next;
        count++;
    }
    console.log("position:", idx)
    return current;
}
                                                    // doesn't work
DLL.prototype.insertAfterValue = function(insertAfter, val){
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
                    myNode.previous = current;
                    this.tail = myNode
                }
                return this;
            }
            current = current.next;
        }
    }else{
        this.add(val);
    }
    return this;
}
                                        
                                        // doesn't work
DLL.prototype.delete = function(val){
    if(!this.head){
        return this;
    }else{
        // var count = 1;
        var before = null;
        var after = null;
        var nodeToDelete = null;
        var current = this.head;
        // first node is removed
        if(current.val == val){
            this.head = current.next;
            // and second node exist
            if(!this.head){
                this.head.previous = null;
            }else{
                // there is no second node
                this.tail = null;
            }
        }else if(this.tail == null){
            // last node is removed
            this.tail = this.tali.previous;
            this.tail.next = null;
        }else{
            // middle node is removed
            while(current){
                if(current.val == val){
                    // unattached
                    before.next = after;
                    after.previous = before;
                    nodeToDelete = null;
                }
                before = current.previous;
                nodeToDelete = current;
                after = current.next;

                current = current.next;
                // count++;
            }
        }

        // while(current){
        //     if(current.val == val){
        //         // if(current == this.head){
        //             var prevNode = current.previous;
        //             console.log("prevNode", prevNode.display())
        //             var nextNode = current.next;
        //             prevNode.next = nextNode;
        //             nextNode.previous = prevNode;
        //             current.next = null;
        //             current.previous = null;
        //             return this;
        //         }
        //         current = current.next;
        //     // }
        //     // return false;
        // }
    }
    return this;
}
// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
// finish from remove
DLL.prototype.clear = function(){
    // empty out the list
}

DLL.prototype.pop = function(){
    // remove final node
} 


var myDLL = new DLL();
myDLL.add(2);
myDLL.add(3);
myDLL.add(4);
myDLL.add(5);

console.log("--------DLL Before--------");
myDLL.display();

// console.log("--------Found node at --------");
// console.log(myDLL.searchNodeAt(2));
// myDLL.display();

console.log("--------Inserted new node: --------");
myDLL.insertAfterValue(3, 88);
myDLL.display();

// console.log("--------After delete--------");
// myDLL.delete(3);
// myDLL.display();

// https://stackoverflow.com/questions/31284954/doubly-linked-list-in-javascript
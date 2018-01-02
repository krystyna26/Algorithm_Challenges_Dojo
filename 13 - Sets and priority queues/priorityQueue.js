function minPriorityQueue(){
    this.head;
}

function MPNode(val, p){
    this.value = val;
    this.next = null;
    this.priority = p;
}

minPriorityQueue.prototype.enqueue = function(val, p){
    var node = new MPNode(cal, p);
    if(!this.head){
        this.head = node;
        return;
    }
    if(this.head.p > p){
        let temp = this.head;
        this.head = node;
        node.next = temp;
        return;
    }else{
        var current = this.head;
        while(current.next){
            if(current.next.p <= p){
                current = current.next;
            }else{
                break;
            }
        }
        var temp = current.next;
        current.next = node;
        node.next = temp;
        return;
    }
}
// ==========================================================
minPriorityQueue.prototype.dequeue = function(){
    if(!this.head){
        return;
    }else{
        var temp = this.head;
        this.head = this.head.next;
        return temp;
    }
}

var myNode = new MPNode(7, 7);
console.log(myNode);

var x = myNode.enqueue(3,3);
console.log(x);

// ===========================================================

minPriorityQueue.prototype.update = function(node, p){
    if(!this.head){
        return;
    }
    var insertAfter = this.head;
    var previous = this.head;
    var current = this.head;
    var foundInsert = false;
    var foundPrevious = false;
    while(current){
        if(current.priority <= p){
            insertAfter = current;
        }else{
            foundInsert = true;
        }
        if(current.next === node){
            var prev = current;
            foundPrevious = true;
        }
        if(foundInsert && foundPrevious){
            break;
        }
    }
    //while current does not exist
    prev.next = node.next;
    if(this.head.previous > p){
        var temp = this.head;
        this.head = node;
        node.next = temp;
    }else{
        node.next = insertAfter.next;
        insertAfter.next = node;
    }
    node.priority = p;
    if(this.head === node){
        console.log("what next");
    }
}
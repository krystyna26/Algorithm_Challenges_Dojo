function DNode(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}

function DLL(){
    this.head = null;
    this.tail = null;
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

  // check if list node has loop
DLL.prototype.hasLoop = function(){
    var current = this.head;
    while(current){
        if(current.next in this === true){
            current.next = null;
            return true;
        }else{
            current['inList'] = true;
            current= current.next;
        }
    }
    return false;
}

DLL.prototype.checkLoop = function(){
    if(!this.head){
        return false;
    }
    var current = this.head;
    var slow = current;
    var fast = current;
    while(current){
        //1 hop
        slow = slow.next;
        if(fast.next != null){
            // 2 hops
            fast = fast.next.next;
        }else{
            // next node null => no loop
            return false;
        }
        // if either hits null..no loop
        if(slow == null || fast == null){
            return false;
        }
        // if the two ever meet...we must have a loop
        if(slow == false || slow.next == fast){
            return true;
        }
    }
}

DLL.prototype.hasLoop2 = function(){
    if(!this.head){
        return false;
    }
    var current = this.head;
    var slow = current;
    var fast = current;
    var taken = 0; var limit = 2;
    while(fast.next != null){
        fast = fast.next;
        taken++;
        if(slow == fast){
            return true;
        }
        if(taken == limit){
            taken = 0; 
            limit *= 2;
            slow = fast;
        }
    }
    return false;
}

DLL.prototype.removeLoop = function(){
    if(!this.head){
        return false;
    }
    var status = false;
    var current = this.head;
    while(current){
        current['used'] = true;
        console.log("current['used']", current['used']);
        if(current.next['used'] == true){
            current.next = null;
            status = true;
            break;
        }
        current = current.next;
        console.log("status",status);
    }
    current = this.head;
    while(current){
        current['used'] = false;
        current = current.next;
    }
    return status;
}


var myDLL = new DLL();
// var node_2 = new DNode(2);
myDLL.add(2);
myDLL.add(3);
myDLL.add(4);
myDLL.add(5);
myDLL.add(6);

// Create a loop for testing
// myDLL.head.next.next.next = myDLL.head.next.next

myDLL.display();
// myDLL.hasLoop();
// myDLL.checkLoop();
// myDLL.removeLoop();
// myDLL.hasLoop2();

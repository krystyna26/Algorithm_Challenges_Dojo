
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

SLQueue.prototype.sizeStack = function(stack1){
    if(stack1.head === null){
        return 0;
    }
    var count =0;
    current = stack1.head;
    while(current){
        count++;
        current = customElements.next;
    }
    return count;
}


// Returns the length of the stack
Stack.prototype.size = function() {
    return this.count;
}
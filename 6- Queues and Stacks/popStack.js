// remove and return top value

function Stack(){
    this.count = 0;
    this.storage = {};
}


Stack.prototype.popStack = function(){
    // check to see if the stack is empty
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}


var stack1 = new Stack();
stack1.storage = {one:1, two:2, three:3, four:4};

console.log("--------Before--------");
stack1.popStack();
console.log("--------After--------");
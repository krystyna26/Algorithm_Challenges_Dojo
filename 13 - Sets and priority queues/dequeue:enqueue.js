function Queue(){
    this.arr1 = [];
    this.arr2 = [];
}

function QNode(val, p){
    this.val = val;
    this.priority = p;
}

Queue.prototype.dequeue = function(){
    if(arr1.length == 0){
        return false;
    }
    for(var i=0; i<arr1.length; i++){
        arr2.push(arr2.pop());
    }
    var temp = arr2.pop();
    for(var i=0; i< arr2.length; i++){
        arr1.push(arr2.pop());
    }
    return temp;
}


var test1 = [2,3,5,8,9];
var test2 = [3,8];
var x = dequeue(test1, test2);
console.log("sortedSubset", x);


Queue.prototype.enqueueWithPriority = function(val, p){
    var node = new QNode(val, p);
    for(let i=this.arr1.length; i>=0; i--){
        if(this.arr1[i].priority > p){
            this.arr2.push(this.arr1.pop());
        }else{
            break;
        }
    }
    arr1.push(node);
    for(var i=0; i <this.arr2.length; i++){
        this.arr1.push(this.arr2.pop());
    }
}
function Heap(){
    this.heap = [undefined];
}       

Heap.prototype.insert = function(val){
    this.heap.push(val);
    var child = this.heap.length-1;
    this.promote(child);
}

//promote for min
Heap.prototype.promote = function(child_Idx){
    var parent_Idx = Math.floor(child_Idx/2);
    if(this.heap[parent_Idx] > this.heap[child_Idx]){
        // swap
        var temp = this.heap[parent_Idx];
        this.heap[parent_Idx] = this.heap[child_Idx];
        this.heap[child_Idx] = temp;
        // callback
        this.promote(parent_Idx);
    }else{
        return;
    }
}

var myHeap = new Heap();
myHeap.insert(17);
myHeap.insert(2);
myHeap.insert(14);
myHeap.insert(7);
myHeap.insert(15);
myHeap.insert(1);

// myHeap.insert(5);
// myHeap.insert(2);

console.log("myHeap", myHeap);
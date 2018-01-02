function popFront(arr){
    var pop = arr[0];
    for(var i=0; i<arr.length-1; i++){
        var swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
    }
    arr.pop();
    return pop;
}
// move front to the end and pop it
var arr = [1,2,3,4];
console.log(popFront(arr));
console.log(arr);
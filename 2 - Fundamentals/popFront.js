function popFront(arr){
    var pop = arr[0];
    for(var i = 0; i < arr.length-1; i++){
        // swap front to the end and pop it
        var swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
    }
    arr.pop();
    return pop;
}

var arr = [1,2,3,4];
console.log("front value:", popFront(arr));
console.log("array after popping front:",arr);
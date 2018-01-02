function partition(arr, start, end){
    var pivot = end; //arr[arr.length-1];
    var wall = start;
    for(var i=start; i<end; i++){
        if(arr[i] < pivot){
            var temp = arr[wall];
            arr[wall] = arr[i];
            arr[i] = temp;
            wall++;
        }
    }
    var temp = arr[wall];
    arr[wall] = arr[pivot];
    arr[end] = temp;
    return wall;
}

var test = [7,3,5,9,1,2];
partition(test);
console.log("partition",test);




function quickSort(arr, start, end){
    if(end-start < 1){
        return;
    }
    (start === undefined) ? 0 : 0;
    (end === undefined) ? arr.length-1 : 0;
    var indx = partition(arr, start, end)
    quickSort(arr, start, idx);
    quickSort(arr, idx+1, end);
    return arr;
}

quickSort(test, test[0], test[test.length-1]);
console.log("quickSort", test);
// partition unsorted array in place. Use arr[0] as pivot val
// inp [5,4,9,2,5,3] out [4,2,3,5,9,5] return 4

function partition(arr, start, end){
    
    var pivot = end; //arr[arr.length-1];
    var wall = start;
    console.log("wall",wall, "start", start, "end", end)
    for(var i = start; i < arr.length; i++){
        console.log("arr[i]", arr[i], "pivot", pivot)
        if(arr[i] < pivot){
            console.log("arr[i] < pivot",arr[i] < pivot)
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

var test = [5,3,9,2,8,4];
partition(test, test[0], test[test.length-1]);
console.log("partition",test);




// function quickSort(arr, start, end){
//     if(end-start < 1){
//         return;
//     }
//     (start === undefined) ? 0 : 0;
//     (end === undefined) ? arr.length-1 : 0;
//     var indx = partition(arr, start, end)
//     quickSort(arr, start, idx);
//     quickSort(arr, idx+1, end);
//     return arr;
// }

// quickSort(test, test[0], test[test.length-1]);
// // console.log("quickSort", test);
// double each element in array, retaining original order
function doubleTrouble(arr) {
    var count = arr.length;
    for (var i = count-1; i >= 0; i--) {
        // console.log(i, arr, arr[i]);
        arr.push(arr[i]);
        for (var idx = arr.length-1; idx > i+1; idx--) {
            // console.log(idx);
            var temp = arr[idx];
            arr[idx] = arr[idx-1];
            arr[idx-1] = temp;
        }
    }
    return arr;
}

var arr1 = [4, 'Ulysses', 42, false];
console.log(doubleTrouble(arr1));
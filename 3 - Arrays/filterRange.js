function filterRange(arr,min,max){ // [4,3,6,8,6,10], 2, 8
    var r = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] < max && arr[i] > min){
            arr[r] = arr[i];
            r++;
        }
    }
    arr.length = r; // [4,3,6]
    return arr;
}

var arr =[1,2,3,4,5,6,7,8,9];
var min = 2;
var max = 7;
console.log(filterRange(arr, min, max));

// =======================================
function removeRange(arr, start, end) {
    for (var count = 0; count < (end - start + 1); count++) {
        removeAt(arr, start);
    }
    return arr;
}

//: Helper function for removing array element at index
function removeAt(arr, idx) {
        var val = arr[idx];
        for (var i=idx; i < arr.length-1; i++) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        arr.pop();
        return val;
}

var arr1 = [20, 30, 40, 50, 60, 70];
console.log(removeRange(arr1, 2, 4));
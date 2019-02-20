function reverseArr(arr){ // [1,2,3,4,5]
    // var temp = 0;
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr; // [5,4,3,2,1]

}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
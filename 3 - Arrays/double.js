// double each element in array

function double(arr){
    var newArr = [];
    var j = 0;
    for(var i=0; i<arr.length; i++){
      newArr[j] = arr[i];
      newArr[j+1] = arr[i];
      j = j+2;
    }
    return newArr;
  }
  
  var arr = [1,2,3,4];
console.log(double(arr));

// ================================
// or without creating a new arr

function doubleInPlace(arr){
    var d = arr.length * 2;
    for(var x=arr.length-1; x>=0; x--){
        arr[d-1] = arr[x];
        arr[d-2] = arr[x];
        d = d-2;
    }
    return arr;
}

var a = [1,2,4,6,9,10];
console.log(doubleInPlace(a));

function pushFront(arr, num){
    arr[arr.length] = num;
    for(var i=arr.length-1; i>0; i--){
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}
// push to the end and swap num to the front of arr
var arr = [2,3,4]
var num = 1;
console.log(pushFront(arr, num));
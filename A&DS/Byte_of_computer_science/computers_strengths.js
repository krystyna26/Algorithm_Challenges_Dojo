function linearSearch(num, arr){
    for(var i = 0 ; i < arr.length; i++){
        // console.log(arr[i], i)
        if(arr[i] == num){
            return i;
        }
    }
    return false;
}

var arr = [24, 8, 23, 3];
console.log(linearSearch(8, arr));   // => 1
console.log(linearSearch(-99, arr)); // => false
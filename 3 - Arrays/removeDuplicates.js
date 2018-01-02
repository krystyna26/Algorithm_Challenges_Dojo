// Given a sorted array, remove duplicate values. Because array elements are in order,
// all duplicate values will be grouped together.

function removeDuplicates(arr){
    var hop = 0;
    var count = 1;
    while(count< arr.length){
        if(arr[hop] == arr[count]){
            console.log("arr[hop] == arr[count]", arr[hop], arr[count]);
            count ++;
        }else{
            arr[hop+1] = arr[count];
            hop++;
            console.log("hop ", hop);
            count++;
            console.log("count ", count);
        }
    }
    // for(var i=0; i<hop; i++){
    //     var x = arr.pop();
    //     console.log(x)
    // }
    var i = arr.length - 1;
    while(i > hop){
        arr.pop();
        i--;
    }
    return arr;
}

var arr1 = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6,7,7,8,8,9,9,10];
console.log(removeDuplicates(arr1));
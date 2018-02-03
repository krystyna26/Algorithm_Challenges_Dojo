// create function that sorts two already separately sorted arrays, placing the result back into the first provided array
function combine(arr1, arr2){
    var combined = [];
    while(arr1.length > 0 || arr2.length > 0){
        if(arr1.length > 0 && arr2.length > 0){
            if(arr1[0] < arr2[0]){
                combined.push(arr1.shift());
                // console.log("combined.push(arr1.shift())",combined.push(arr1.shift()))
            }else{
                combined.push(arr2.shift());
                // console.log("combined.push(arr2.shift())",combined.push(arr2.shift()))
            }
        }else{
            // console.log("arr1 in else statement", arr1, arr2)
            if(arr1.length > 0){
                // combined.concat(arr1);
                combined.push(arr1.shift())
                // console.log(combined);
                // console.log("arr1", arr1)
                break;
            }else{
                // console.log("arr1", arr1, "arr2", arr2)
                // combined.concat(arr2);
                combined.push(arr2.shift());
                //  console.log("arr2", arr2)
                break;
            }
        }
        // console.log(combined)
    }
    return combined;
}

var test1 = [2,5,9];
var test2 = [4,6,7,10,11];
var result = combine(test1, test2);
console.log(result) // [ 2, 4, 5, 6, 7, 9, 10 ,11]

var test3 = [2,5,6];
var test4 = [3,4,5,7];
console.log(combine(test3, test4))// [ 2, 3, 4, 5, 5, 6, 7 ]
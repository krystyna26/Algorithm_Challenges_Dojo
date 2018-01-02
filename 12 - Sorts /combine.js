function combine(arr1, arr2){
    var combined = [];
    while(arr1.length>0 || arr2.length>0){
        if(arr1.length>0 && arr2.length>0){
            if(arr1[0] < arr2[0]){
                combined.push(arr1.shift());
            }else{
                combined.push(arr2.shift());
            }
        }else{
            if(arr1.length >0){
                combined.concat(arr1);
                break;
            }else{
                combined.concat(arr2);
                break;
            }
        }
        // console.log(combined)
    }
    return combined;
}

var test1 = [2,5,9];
var test2 = [4,6,7];
var result = combine(test1, test2);
console.log(result)
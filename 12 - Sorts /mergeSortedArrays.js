function mergeSortedArrays(arr1, arr2){
    var j = arr1.length-1;
    arr1.length += arr1.length;
    var k= arr2.length-2;
    for(var i=arr1.length-1; i>=0; i--){
        if(arr2[k]>arr1[j] || j>0){
            arr1[i] = arr2[k];
            k--;
        }else if(arr1[k] < arr1[j] || k>0){
            arr1[i] = arr1[j];
            j--;
        }
    }
    return arr1;
}

var test1 = [2,3,6,9];
var test2 = [1,3,5,7];
mergeSortedArrays(test1, test2)
console.log("mergeSortedArrays",test1);
// ================================================
function mergeArray(arr1, arr2){
    var arr = [];
    while(arr1.length>0 || arr2.length>0){
        if(arr1.length<1){
            arr.concat(arr2);
            break;
        }else if(arr2.length<1){
            arr.concat(arr1);
            break;
        }else{
            if(arr1[0] < arr2[0]){
                arr.push(arr1.shift());
            }else{
                arr.push(arr2.shift());
            }
        }
    }
    return arr;
}

var test4 = [5,2,8,3,0,1,3];
var test5 = [7,6,4];
mergeArray(test4, test5)
console.log("mergeArray:",mergeArray);
// ================================================
var mergeOrderArr = function (arr1,arr2){
    var result = [],
     i = 0,  
     j = 0;
  
    while( i < arr1.length  && j < arr2.length ){
      if(arr1[i] <= arr2[j]){
        result.push(arr1[i++]);
      } else{
        result.push(arr2[j++]);
      }
    }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}

var b = mergeOrderArr([1,100], [3,4,6,8]);
console.log("mergeOrderArr",b)

// ================================================

// function mergeSort(arr){
//     if(arr.length == 1){
//         return arr;
//     }
//     var halfIdx = Math.floor(arr.length/2);
//     var leftArr = arr.splice(0,halfIdx);
//     var rightArr = arr.splice(halfIdx);
//     mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
// }


// var test3 = [6,5,1,2];
// mergeSort(test3);
// console.log(test3);

// ================================================

function mergeSort2(arr){
    if(arr.length == 1){
        return arr;
    }
    var sa = mergeArray(mergeSort2(arr[0,arr.length/2]), mergeSort2(arr[length/2,arr.length]))
    return sa;
}

var test6 = [6,2,8,4,3,5,1];
mergeSort2(test6);
console.log("mergeSort2",mergeSort2);
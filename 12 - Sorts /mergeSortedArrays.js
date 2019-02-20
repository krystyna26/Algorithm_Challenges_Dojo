// merge sort - First divide the list into the smallest unit (1 element), then compare each element 
// with the adjacent list to sort and merge the two adjacent lists. 
//Finally all the elements are sorted and merged.
function mergeSortedArrays(arr1, arr2){
    var len1 = arr1.length, len2 = arr2.length;
    var combinedLength = len1 + len2 - 1;

    for(var i = combinedLength; i >= 0; i--){
        if(arr1[len1-1] >= arr2[len2-1]){
            arr1[i] = arr1[len1-1];
            len1--;
        }else if(arr1[len1-1] < arr2[len2-1]){
            arr1[i] = arr2[len2-1];
            len2--
        }
        if(len1 == 0){
            if(len2 == 0){
                break
            }
            arr1[i-1] = arr2[len2-1]
            len2--;
        }
    }
    return arr1;
}

var test2 = [2,3];
var test1 = [1,4,5,7,8,9,10, 95];
// console.log("mergeSortedArrays",mergeSortedArrays(test1, test2));
// ================================================
function mergeArray(arr1, arr2){
    var arr = [];
    while(arr1.length > 0 || arr2.length > 0){
        if(arr1.length < 1){
            arr.concat(arr2);
            break;
        }else if(arr2.length < 1){
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
// console.log("mergeArray:",mergeArray(test4, test5)); ------------> doesn't work yet
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

var b = mergeOrderArr([1,100], [3,4,6,8,56,99]);
// console.log("mergeOrderArr",b)

// ================================================

function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    var halfIdx = Math.floor(arr.length/2);
    var leftArr = arr.splice(0,halfIdx);
    var rightArr = arr.splice(halfIdx);
    mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

var test3 = [6,5,1,2];
mergeSort(test3);
// console.log(test3); ----------------------------------------> doesn't work yet

// ================================================

function mergeSort2(arr){
    if(arr.length == 1){
        return arr;
    }
    var sa = mergeArray(mergeSort2(arr[0,arr.length/2]), mergeSort2(arr[length/2,arr.length]))
    return sa;
}

var test6 = [6,2,8,4,3,5,1];
// console.log("mergeSort2:",mergeSort2(test6));



//======================================
function mergeSort(sequence) {
    var merge = function(sequence, left, middle, right) {
  
      var result = [], i, j;
  
      for (i = left, j = middle; i < middle && j < right; ) {
        if (sequence[i] < sequence[j]) {
          result.push(sequence[i]);
          i++;
        }
        else {
          result.push(sequence[j]);
          j++;
        }
      }
  
      while (i < middle) {
        result.push(sequence[i]);
        i++;
      }
  
      while (j < right) {
        result.push(sequence[j]);
        j++;
      }
  
      for (i = left; i < right; i++) {
        sequence[i] = result[i - left];
      }
      console.log("sequence", sequence)
    }
  
    var split = function(sequence, left, right) {
  
      var middle = Math.floor((left + right) / 2);
  
      if(right - left < 2){
        return 
      }
      split(sequence, left, middle);
      split(sequence, middle, right);
      merge(sequence, left, middle, right);
      console.log("in split")
    }
  
    split(sequence, 0, sequence.length);
  
    return sequence;
  }

  var sequence = [3, 6, 1, 5, 3, 6]
  // [1, 3, 3, 5, 6, 6]

  console.log(mergeSort(sequence))
function sort(arr){
    var pos = 0;
   
    var min = arr[0];
    var temp = 0;
    for(var i=0; i< arr.length; i++){
        min = arr[i];
        var minChanged = false;
        for(var x=i; x< arr.length; x++){
            if(arr[x] <min){
                min = arr[x];
                pos = x;
                minChanged = true;
            }
        }
        if (minChanged) {
            temp = arr[i];
            arr[i] = min;
            arr[pos] = temp;
            console.log(arr);
        }
        
    }
    // return arr;
}


var test = [5,6,7];
sort(test);
console.log("sort", test)
//--------------------------------------

function selectionSort(arr, start=0){
//     console.log("start ", start)
//     console.log("arr begin ", arr)
    if(start>=arr.length){
        return arr;
    }
    var min = start;
    for(var i=start; i<arr.length; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    // console.log("start: ", start, "min ", min);
    var temp = arr[start];
    arr[start] = arr[min];
    arr[min] = temp;
    // console.log("arr end ", arr)
    selectionSort(arr, start+1);
    // return arr;
}

var test2 = [37,4,2,23,8];
selectionSort(test2)
console.log("selectionSort",test2);
//--------------------------------------

function bubbleSort(arr){
    for(var i=0; i<arr.length; i++){
        var j = 1;
        for(var x=0; x<arr.length; x++){
            if(arr[j] < arr[x]){
                var temp = arr[x];
                arr[x] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

var test3 = [6,2,62,9,12,4];
console.log("bubbleSort", bubbleSort(test3));
//--------------------------------------

function insSort(arr){
    for(var i=1; i<arr.length; i++){
        if(arr[i-1] > arr[i]){
            var temp = arr[i];
            for(var k=i; k>=0; k--){
                if(temp > arr[k-1] || k==0){
                    arr[k] = temp;
                    break;
                }else{
                    arr[k] = arr[k-1];
                }
            }
        }
    }
    return arr;
}

var test4 = [6,4,8,2,61,3,12];
console.log("insSort", insSort(test4));
//--------------------------------------

// function insSort2(arr){
//     for(var i=1; i<arr.length; i++){
//         var temp =arr[i];
//         for(var j=i; j>=0; j--){
//             if(temp < arr[j]){
//                 arr[j+1] = arr[j];
//             }else{
//                 arr[j+1] = temp;
//                 break;
//             }
//             if(j===0 && temp < arr[j]){
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// var test5 = [3,15,1,63,23,5,1]
// console.log("insSort2", insSort2(test5));
//--------------------------------------


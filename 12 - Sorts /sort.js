// sort an unsorted array in place
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
        }
    }
    return arr;
}

var test = [9,4,6,1,5,10,7];
console.log("sort", sort(test))

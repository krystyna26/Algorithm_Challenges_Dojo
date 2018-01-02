function sortedSubset(arr1, arr2){
    if(arr1.length < arr2.length){
        return false;
    }else{
        var i=0;
        var j=0;
        while(i < arr1.length){
            if(arr1[i] == arr1[j]){
                i++;
                j++;
                if(j > arr2.length-1){
                    return true;
                }
            }else{
                i++;
            }
        }
    }
    return false;

}       


var test1 = [2,3,5,8,9];
var test2 = [3,8];
var x = sortedSubset(test1, test2);
console.log("sortedSubset", x);
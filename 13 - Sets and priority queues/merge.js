// merge sorted arrays
function merge(arr1, arr2){
    var arr = [];
    var bigArr = arr1.length >= arr2.length ? arr1 : arr2;
    var smallArr = arr1.length < arr2.length ? arr1 : arr2;
    var k = 0, i = 0;
    while(i < bigArr.length || k < arr2.length){
        if(smallArr[k]=== undefined || bigArr[i] < smallArr){
            arr.push(bigArr[i]);
            i++;
        }else{
            arr.push(smallArr[k]);
            k++;
        }
    }
    return arr;
}

var test1 = [1,3,4,6,6];
var test2 = [1,2,5,6,8];
var y = merge(test1, test2);
console.log("merge", y);
// [1,1,3,2,,4,5,6,6,6,8] ----------------> doesnt't work yet

// ===========================================
function intersection(arr1, arr2){
    var interArr = [];
    var k = 0, i = 0;
    while(i < arr1.length && k < arr2.length){
        if(arr1[i] === arr2[k]){
            interArr.push(arr1[i]);
            i++;
            k++;
        }else if(arr1[i] <arr2[k]){
            i++;
        }else{
            k++;
        }
    }
    return interArr;
}

var x = intersection(test1, test2);
console.log("intersection",x)

// ===========================================
function union(arr1, arr2){
    var unionArr = [];
    var bigArr = arr1.length >= arr2.length ? arr1 : arr2;
    var smallArr = arr1.length < arr2.length ? arr1 : arr2;
    var k=0, i=0;
    while(i<bigArr.length){
        if(smallArr[k]===undefined || bigArr[i]<smallArr[i] ){
            unionArr.push(bigArr[i]);
            i++;
        }else if(smallArr[k] < bigArr[i]){
            unionArr.push(smallArr[k]);
            k++;
        }else{
            unionArr.push(bigArr[i]);
            i++;
            k++;
        }
    }
    return unionArr;
}


var z = union(test1, test2);
console.log("union", z);
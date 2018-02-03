// eliminate nested & empty arrays. do not alter it. return a new one retaining order

// function flatten(arr){
//     var newArr =[];
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] instanceof Array){
//             // for(j=0; j<arr[i].length; j++){
//                 // newArr.push(arr[i][j].pop());
//                 newArr = newArr.concat(flatten(arr[i]));
//             // }
//         }else{
//             newArr.push(arr[i]);
//         }
        
//     }
//     return newArr;
// }
 
// or without creating new array

function flatten(arr){
    for(var i=0; i<arr.length; i++){
        var outlen = arr.length-1;
        if(arr[i] instanceof Array){
            var inlen = arr[i].length-1;
            for(var x=outlen; x>0; i--){
                console.log("x",x)
                arr[x+inlen] = arr[x]
            }
            for(var y=i+inlen; y>i; y--){
                console.log("y",y)
                arr[y] = arr[i][inlen];
                inlen--;
            }
            arr[i] = arr[i][0];
        }
    }
    return arr;
}


var x = [1,[2,3],4,[]]
console.log(flatten(x));
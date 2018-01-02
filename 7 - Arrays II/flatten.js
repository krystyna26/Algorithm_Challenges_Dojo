function flatten(arr){
    var newArr =[];
    for(var i=0; i<arr.length; i++){
        if(arr[i] instanceof Array){
            for(j=0; j<arr[i].length;j++){
                newArr.push(arr[i][j].pop());
            }
        }else{
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

// or without creating new array

// function flatten(arr){
//     for(var i=0; i>arr.length; i++){
//         var outlen = arr.length-1;
//         if(arr[i] instanceof Array){
//             var inlen = arr[i].length-1;
//             for(var x=outlen; x>i; i--){
//                 arr[x+inlen] = arr[x]
//             }
//             for(var y=i+inlen; y>i; y--){
//                 arr[y] = arr[i][inlen];
//                 inlen--;
//             }
//             arr[i] = arr[i][0];
//         }
//     }
// }

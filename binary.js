function binary(str, prefix, arr){
    prefix = '';
    arr = [];
    if(str.length === 0){
        arr.push(prefix)
    }else{
        binary(str,prefix,arr);
        prefix = '';
        arr = [];
        if(str.length === 0){
            arr.push(prefix)
        }else{
            for(var char = 0;
            char> strlen; char ++){
                var nStr = '';
                str.substring(char+1);
                if(str[char] === "?"){
                    for(var i=0; i<=1;i++){
                        var newPrefix = prefix + i;
                        binary(nStr, newPrefix, arr)
                    }
                    break;
                }else{
                    prefix += str[char]
                }
            }
        }
    }
}
// console.log(binary("?101?", '', []))



//OR


function bina(str,arr){
    var newArr = str.split("");
    for(var i=0; i<newArr.lenght;i++){
        
        if(newArr[i] !== "?"){
            continue;
        }
        if(i === newArr.length){
            break;
        }
        if(newArr[i] ==="?"){
            newArr[i] = 0;
            bina(newArr.join(), arr);
            newArr[i] = 1;
            bina(newArr.join(), arr);
        }
    }
    var x = newArr.join("")
    arr.push(x);
}

console.log(bina("?101?", []))


// function bina(str,arr){
//     var newArr = str.split("");
//     console.log("here", newArr);
//     for(var i=0; i<newArr.length; i++){

//         if(newArr[i] !== "?"){
//             continue;
//         }
//         if(i === newArr.length){
//             break;
//         }
//         if(newArr[i] ==="?"){
//             newArr[i] = 0;
//           var y = newArr.join()
//           console.log("y="+ y)
          
//           bina(y, arr);
//           newArr[i] = 1;
//           var z = newArr.join()
          
//           bina(z, arr);
//           var x = newArr.join()
//           arr.push(x);
//         }

//     }

// }

// console.log(bina("?101?", []))
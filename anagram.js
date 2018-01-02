function anagram(pos, prefix = '', ans = []){
    var strLen = pos.length;
    if(strLen == 0){
        ans.push(prefix);
    }else{
        for(i=0; i< strLen; i++){
            var newPrefix = prefix + pos[i];
            var newPos = pos.substring(0,i) + pos.substring(i+1, pos.length);
            anagram(newPos, newPrefix,ans)
        }
    }
    // arrays are modified every time an action changes it - passed by reference
    return ans;
}


// OR

function AAA(str, char, arr){
    if(str.length == 1){
        arr.push(str)
        return;
    }
    for(var i =0; i< str.length; i++){
        var start = arr.length;
        // var sub1 = str(0:i);
        // var sub2 = str[i+1:]
        var sub1 = str.substring(0,i);
        var sub2 = str.substring(i+1);
        AAA(sub1 + sub2, str[i], arr);
        for(var j = start; j < arr.length; j++){
            arr[j] = str[i] + arr[j]
        }
    }
}



console.log(anagram("ABC","",[]))

console.log(AAA("ABC","",[]))


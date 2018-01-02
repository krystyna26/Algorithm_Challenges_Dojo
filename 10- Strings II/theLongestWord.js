function longest(str){
    var max = "";
    var temp = "";
    for(var i=0; i<str.length; i++){
        if(str[i] =="" && temp.length > max.length){
            max = temp;
            temp='';
        }else if (str[i] ==''){
            temp = '';
        }else{
            temp += str[i]
        }
    }
    if(temp.length > max.length){
        mamx = temp;
    }
    return max;
}

var test = "Hello Word Salamander"
// console.log(longest(test))

//OR


function theLongestWord(str){
    var punctORSpace = {}
    var longest = "";
    var word = "";
    for(var i=0; i<str.length; i++){
        if(punctORSpace[str[i]]){
            if(word.length > longest.length){
                longest = word;
            }
            word = "";
        }else{
            word += str[i];
        }
    }
    if(word.length > longest.length){
        longest = word;
    }
    return longest;
}

console.log(theLongestWord(test))
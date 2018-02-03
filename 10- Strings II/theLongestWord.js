function longest(str){
    var max = "";
    var temp = "";
    for(var i=0; i<str.length; i++){
        if(str[i] == "" && temp.length > max.length){
            max = temp;
            temp='';
        }else if (str[i] ==''){
            temp = '';
        }else{
            temp += str[i]
        }
    }
    if(temp.length > max.length){
        max = temp;
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

// OR

function findLongestWord(str) {
    var wordArr = str.split(" ");
    var longestWord = wordArr[0];
    for (var i = 1; i < wordArr.length; i++) {
        if (wordArr[i].length > longestWord.length) {
            longestWord = wordArr[i];
        }
    }
    return longestWord;
}

var str1 = "Snap crackle pop makes the world go round!";
console.log(findLongestWord(str1));
// Create a JavaScript function that given a string, returns
// the integer made from the string's digits.

function getDigit(str){
    var newStr = str.split("");
    var digitStr = " ";
    for(var i=0; i<newStr.length; i++){
        if(newStr[i]%1 === 0){
            digitStr += newStr[i];
        }
    }
    return(digitStr);
}

console.log(getDigit("Par3se8")); // 38
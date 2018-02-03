// Create a function that returns a Boolean whether the string is a strict
// palindrome

function palindrome(string){
    for (var i=0; i<Math.floor(string.length/2); i++){
        if(string[i] !== string[string.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log("palindrome:", palindrome("gfedcbaabcdefg")); // true
console.log("palindrome:", palindrome("mko")); // false


function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    var s = str.split('') // ["m", "a", "m", "a", "t"]
    // console.log(s);
    var r = s.reverse(); // ["t", "a", "m", "a", "m"]
    // console.log(r);
    var j = r.join(); // "t,a,m,a,m"
    // console.log(j);
    return (str == str.split('').reverse().join(''));
}
  
console.log("isPalindrome", isPalindrome("mamat")); // false


function palindrome2(str){
    var dict = {".":true, ",":true, ":":true, "!":true, "?":true };
    var i = 0; j = str.length - 1;
    while(i < j){
        var start = str[i];
        var last = str[j];
        if(start in dict){
            i++;
        }
        if(last in dict){
            j++;
        }
        if(start !== last){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log("palindrome2", palindrome2("gfedcbaabcdefg")); //true
console.log("palindrome2", palindrome2("abcba")); // true
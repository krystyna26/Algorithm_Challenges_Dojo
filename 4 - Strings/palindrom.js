// Create a function that returns a Boolean whether the string is a strict
// palindrome

function palindrom(string){
    for (var i=0; i<Math.floor(string.length/2); i++){
        if(string[i] !== string[string.length-1-i]){
            return false;
        }
    }
    return true;
}



function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    
    var s = str.split('') // ["m", "a", "m", "a", "t"]
    console.log(s);
    var r = s.reverse(); // ["t", "a", "m", "a", "m"]
    console.log(r);
    var j = r.join(); // "t,a,m,a,m"
    console.log(j);
    
    return (str == str.split('').reverse().join(''));
  }
  
  console.log(isPalindrome("mamat")); // false
// Create a function that, given an input string str, returns a Boolean whether
// parentheses in str are valid. Valid sets of parentheses always open before they
// close.

function parenthesis(str){
    var arr = [];
    for(var i = 0; i< str.length; i++){
        if(str[i] == "("){
            console.log(arr.push(str[i]));
            console.log("push", arr)
        }else if(str[i] == ")"){
            if(arr.length == 0){
                return false;
            }else{
                arr.pop();
                console.log("pop")
            }
        }
    }
    return(arr.length ? false : true);
// OR
//     for(var i=0; i<str.length; i++){
//         if(str[i]=="("){
//             count++;
//         }
//         else if(str[i] ==")"){
//             count--;
//         }
//         if(count < 0){
//             return false;
//         }
//         if(count ==0){
//             return true;
//         }else{
//            return false
//         }
//     }
}

var string1 = "Y(3(p)p(3)r)s";
var string2 = "N(0(p)3";
console.log(parenthesis(string1));
console.log(parenthesis(string2))
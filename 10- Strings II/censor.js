// given a string and arrays of words, return the new string with 
// naughty words changes to "x" characters
function censor(str, list){
    var nStr = str;
    for(var i=0; i< list.length; i++){
        var word = list[i];
        console.log("word=", word)
        var temp = "";
        for(var j=0; j< nStr.length; j++){
            console.log("nStr[j]=", nStr[j], "word[0]=",word[0])
            if(nStr[j] == word[0]){
                var match = true;
                for(var k=0; k< word.length; k++){
                    if(nStr[j+k] !== word[k]){
                        console.log("nStr[j+k]=",nStr[j+k], "word[k]=",word[k])
                        match = false;
                        break;
                    }
                }
                if(match){
                    console.log("matched!!!")
                    var exes = "x".repeat(word.length);
                    console.log("exes=", exes);
                    temp = temp + exes;
                    console.log("temp=",temp);
                    j = j + word.length-1;
                }else{
                    console.log("doesn't match!!!!!!")
                    temp = temp + nStr[i]
                }
            }else{
                console.log("letters are not equal")
                console.log("temp=", temp, "nStr[j]=", nStr[j])
                temp = temp + nStr[j];
                console.log("temp after=", temp)
            }
        }
        nStr = temp;
        console.log("nStr=", nStr);
    }
    return nStr;
}


var test = "Snack poop crackers";
var test1 = ["crack", "poop"];
// "Snack xxxx xxxxxers"
console.log(censor(test, test1))

// You are climbing a staircase that has n steps. 
// You can take the steps either 1 or 2 at a time. 
// Calculate how many distinct ways you can climb to the top of the staircase.
function climbingStairs(n) {
    // 	if(n <= 2){
    // 		return n 
    // 	}
    // 	else{
    // 		return climbingStairs(n-1) + climbingStairs(n-2);
    // 	}
    // num: n,
    // [Symbol.iterator]: function*() {
    // 	yield climbingStairs(n-1) + climbingStairs(n-2);
    // 	}
    }
    
    
    
    
    var a = 1;
    console.log(climbingStairs(a)); // 1
    
    var n = 26;
    console.log(climbingStairs(n)); // 196418
    
    var b = 42;
    console.log(climbingStairs(b)); // 433494437
    
    // function x(){
    
    // }
    
    // console.log(x)
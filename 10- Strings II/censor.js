// given a string and arrays of words, return the new string with naughty words changes to "x" characters
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

console.log(censor(test, test1))
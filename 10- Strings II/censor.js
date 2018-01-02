function censor(str, list){
    var nStr = str;
    for(var i=0; i< list.length;i++){
        var word = list[i];
        var temp = "";
        for(var j=0; j< nStr.length; j++){
            if(nStr[j] == word[0]){
                var match = true;
                for(var k=0; k< word.length; k++){
                    if(nStr[j+k] !== word[k]){
                        match = false;
                        break;
                    }
                }
                if(match){
                    var exes = "x" * word.length;
                    temp = temp + exes;
                    j = j + word.length-1;
                }else{
                    temp = temp + nStr[i]
                }
            }else{
                temp = temp + nStr[j];
            }
        }
        nStr = temp;
    }
    return nStr;
}


var test = "Snack poop crackers";
var test1 = ["crack", "poop"];

console.log(censor(test, test1))
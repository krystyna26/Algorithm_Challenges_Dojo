// given a string of words, return array of words
function split(str){
    var punOrSpace = {"":true, "/n":true, "/t":true, ".":true }
    var arr = [];
    var word = "";
    for(var  i=0; i<str.length; i++){
        if(punOrSpace[str[i]]){
            if(word != ""){
                arr.push(word);
            }
        word ="";
        } else {
         word += str[i];
        }
    }
        if(word != ""){
           arr.push(word);
            return arr;
        }
      
}


var test = "Hello World Salamander"

console.log(split(test))

//OR 

function wordArray(str){
    var arr = [];
    var temp = '';
    for (var i=0; i< str.length; i++){
        if(str[i]===' '){
            arr.push(temp);
            temp = '';
        }else{
            temp += str[i];
        }
    }
    arr.push(temp);
    return arr;
}


var test = "Hello World"

console.log(wordArray(test))
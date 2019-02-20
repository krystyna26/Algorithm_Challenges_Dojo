// return first letters only, capitalized
function acronym(str){
    var newStr = str.split(" ");
    console.log(newStr); // ["co", "tam"]
    var acr = " ";
    for(var i = 0; i < newStr.length; i++){
        // if space then ignore
        if(newStr[i] == false){
            continue;
        }else{
            acr += newStr[i][0];
        }
    }
    return acr.toUpperCase();

}

console.log(acronym("co tam")); // CT
console.log(acronym("how are you")) // HAY

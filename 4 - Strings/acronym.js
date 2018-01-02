function acronym(str){
    var newStr = str.split(" ");
    var acr = " ";
    for(var i=0; i<newStr.length; i++){
        if(newStr[i] == false){
            continue;
        }else{
            acr += newStr[i][0];
        }
    }
    return acr.toUpperCase();

}

console.log(acronym("co tam")); // CT

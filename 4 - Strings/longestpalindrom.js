

// DOESNT WORK YET

function longestPalindrom(str){
    var longest = str[0];
    for (var i=1; i<str.length-2; i++){
        var start, stop, sub ='';
        if(str[i] === str[i+1]){
            start = i;
            stop = i+1;
        }else if (str[i-1] === str[i+1]){
            start = i-1;
            stop = i+1;
            sub = str[i];
        }else{
            continue;
        }
    }
        while(str[start] === str[stop] && str[start] !== undefined || str[stop] !== undefined){
            sub = str[start] + sub + str[stop];
            start -=1;
            stop +=1;
            if(sub.length > longest.length){
                longest = sub;
            }
        }
        return longest;
    
}


console.log(longestPalindrom("Hot puree eruption!"));
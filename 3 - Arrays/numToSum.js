function numToSum(num){
    var str = num.toString();
    var sum = str;
        var add = 0;
        for(var i = 0; i < sum.length; i++){ 
            add += parseInt(str[i]); 
        }
        sum = add + " "; 
    return parseInt(sum);
}

var num = 765;
console.log("Sum is: ",numToSum(num)); // 18

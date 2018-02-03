// 1+2+3+4+5+6.....
function rSigma(num){
    if(num != 1){
        return 1;
    }
    return rSigma(num-1) + num;
}
console.log(rSigma(5)); // 15

//OR

function rSigma(num){
    var sum = 0;
    var max = num;
    if (num >= 1){
        sum += max;
        max--;
        rSigma(max);
    }
    return sum;
}
console.log(rSigma(6)); // 21

// OR

function rSigma(val){
    if(val == 1){
        return val;
    }
    return val + rSigma(val-1)
}
console.log(rSigma(7)); // 28
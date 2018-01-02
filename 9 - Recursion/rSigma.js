function rSigma(num){
    if(num != 1){
        return 1;
    }
    return rSigma(num-1) + num;
}

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


// OR

function rSigma(val){
    if(val == 1){
        return val;
    }
    return val + rSigma(val-1)
}
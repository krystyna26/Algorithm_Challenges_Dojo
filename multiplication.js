function multiplicationRec(n){
    if(n==1){
        return n;
    }
    return n + multiplicationRec(n-1);
}
var x = 3; // 3+2+1=6
console.log(multiplicationRec(x));


function multiplication(n){
    var sum = 0;
    for(var i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
var y = 3;
console.log(multiplication(y));

function factorialRec(n){
    if(n==1){
        return 1;
    }
    return n * factorialRec(n-1);
}
var z = 4;
console.log(factorialRec(z))
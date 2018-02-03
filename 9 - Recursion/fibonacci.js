// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// The Rule is xn = xn-1 + xn-2

function fibonacciRecursive(n){
    // console.log("start n", n)
    if(n==0){
        return 0;
    }
    else if(n==1){
        // console.log("n", n)
        return 1;
    }else{
        return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
    }
}
//OR

function fibonacci(num){
    if(num <=2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacciRecursive(6))
console.log(fibonacci(8))
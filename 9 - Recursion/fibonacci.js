function fibonacci(n){
    if(n==0 || n==1){
        return n;
    }else{
        return fibonacci(n-2) + fibonacci(n-1)
    }
}
//OR

function fib(num){
    if(num <=2){
        return 1;
    }
    return fib(num-1) + fib(num-2)
}



console.log(fibonacci(5))

console.log(fib(5))
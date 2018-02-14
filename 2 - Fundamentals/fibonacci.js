function fibonacci(num){
    var x =[0,1];
    var temp = 0;
    for(var i=2; i<=num; i++){
        temp = x[0] + x[1];
        x[0] = x[1];
        x[1] = temp;
    }
    return x[1];
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(7)); // 13

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
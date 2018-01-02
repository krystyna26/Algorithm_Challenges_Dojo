function digitSum(num){
    return num%9==0 ? 9 : num%9;
}

var num = 211;
console.log(digitSum(num));

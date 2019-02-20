// Implement digitSum(num) that sums a given integer's digits repeatedly
// until the sum is only one digit. Return that one-digit result.
// Ex: sumToOne(928) returns 1, because 9+2+8=19, then 1+9=10, then 1+0=1.
function digitSum(num){
    return num%9 == 0 ? 9 : num%9;
}

var num = 211;
console.log(digitSum(num)); // 4

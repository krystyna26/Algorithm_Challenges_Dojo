// function makeArrayConsecutive2(st) {
//     if(st == 1){
//         return 0
//     }
    
//     var sorted = st.sort();
//     console.log("sorted", sorted)
//     var x;
//     var diff = 0;
//     for(var i = 0; i < sorted.length-1; i++){
//         if((sorted[i+1] - sorted[i]) == 1){
//             x = 0;
//         }else{
//             x = sorted[i+1] - sorted[i] - 1;
//             console.log("x=", x)
//         }
//         diff += x;
//         console.log("diff", diff)
//     }
//     return diff;
// }

// var arr = [1,6,2,3,8,10]
// // 4
// console.log(makeArrayConsecutive2(arr))
// ==================================================================================================


// var args = process.argv.slice(2)[0].split(" "),
//     numberOfOperators = 0;

//     args.forEach(function(val, index, array) {
//     if (isNaN(val)) {
//     ++numberOfOperators;
//     }
//     });

//     args = args.join("");


// var recurse = function(openParenCount, closeParenCount, input, pointer) {
//     if (openParenCount === 0 && closeParenCount === 0) {
//     console.log(input + "\n");
//     }
//     if (openParenCount > 0) {
//     input = input.slice(0, pointer) + "(" + input.slice(pointer, input.length);
//     recurse(openParenCount - 1, closeParenCount + 1, input, pointer+1);
//     }

//     if (closeParenCount > 0) {
//     input = input.slice(0, pointer+openParenCount+3) + ")" + input.slice(pointer+openParenCount+3, input.length+1);
//     recurse(openParenCount, closeParenCount - 1, input, pointer+3);
//     }
// }

// recurse(numberOfOperators, 0, args, 0);

// function paren(n){
//     var ans = [];
//     var arr = [];
//     function generate(arr){
//         if(arr.length == 2*n){
//             if(valid(arr)){
//                 ans.push(arr.join(""))
//             }else{
//                 arr.push("(")
//                 generate(arr)
//                 arr.pop()
//                 arr.push(")")
//                 generate(arr)
//                 arr.pop()
//             }
//         }
//     }

//     function valid(arr){
//         var bal = 0;
//         for(var c in arr){
//             if(c == "("){
//                 bal += 1
//             }else{
//                 bal -= 1
//             }
//             if(bal < 0){
//                 return false
//             }
//         }
//         return bal == 0
//     }
//     generate()
//     return ans
// }



// var n = 3;
// var str = [10]

// paren(n)

// var permArr = [],
// usedChars = [];

// function permute(str) {
//     var input = str.replace(/\s+/g, "").split(/([^\d\.]+)/g);

// var i, ch;
// for (i = 0; i < input.length; i++) {
//   ch = input.splice(i, 1)[0];
//   usedChars.push(ch);
//   if (input.length == 0) {
//     permArr.push(usedChars.slice());
//   }
//   permute(input);
//   input.splice(i, 0, ch);
//   usedChars.pop();
// }
// return permArr
// };

// var str = "2 - 1 - 1";

// permute(str)


// Given a string of numbers and operators, print out all the different ways you can add parentheses 
// to force the order of operations to be explicit, and the result for running the operations in that order.

// Assume:
// No weird inputs, everything is separated by one space.
// Supported operators are +, *, -, = (for the = operator, if the values are the same return 1, otherwise return 0)
// Print your results sorted numerically
// Don't worry about the input expression size being too large
// Your code should be written in javascript
// Don't use eval or external libraries

// Example:
// node test.js "2 - 1 - 1"
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// node test.js "2 * 3 - 4 * 5";
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

// node test.js "2 + 2 = 2"
// ((2+2)=2) = 0
// (2+(2=2)) = 3

// var str = "2 * 3 - 4 * 5";
// var arr = [];
// var sl =  str.split('') // [ '2', ' ', '*', ' ', '3', ' ', '-', ' ', '4', ' ', '*', ' ', '5' ]
// var sliced = str.slice(2)[0];
// // console.log(sliced)

// var args = str.replace(/\s+/g, "").split(/([^\d\.]+)/g); // [ '2', '*', '3', '-', '4', '*', '5' ]
// console.log(args)

var AP = [];

function recurse(arr, into){
    if(arr.length === 1){
        into.push(arr[0]);
    }else{
        for(var i=0, j=arr.length-2; i<j; i+=2){
            recurse(
                AP.concat(
                    arr.slice(0, i),
                    "(" + arr.slice(i, i+3) + ")",
                    arr.slice(i+3)
                ),
                into
            )   
        }
    }
    // console.log("EVAL",eval(arr.slice(i, i+3)))
    // console.log(" arr.slice(0, i),",  arr.slice(0, i),);
    // console.log("arr.slice(i, i+3)", arr.slice(i, i+3));
    // console.log('join(" ")', arr.join(" "))
    // console.log("arr.slice(i+3)", arr.slice(i+3))
    return into
}

// var str = "2 * 3 - 4 * 5";
var str = "2 + 2 = 2"
//         0 1 2 3 4 5 6
var args = str.replace(/\s+/g, "").split(/([^\d\.]+)/g); // [ '2', '*', '3', '-', '4', '*', '5' ]
// console.log("ARGS", args)
recurse(args, []).forEach(
    function(v){ 
        var res = v.split(',').join('')  // (2+(2=2)) , ((2+2)=2)
        //     var res = []
        //     for(var el = 0; el < v.length; el++){
        //         if(v[el] !== del){
        //             res.push(v[el])
        //         }
        //     }
        // console.log(parseInt(res))

        // var sum = 0;
        // for(var i = 0; i<res.length; i++){
        //     if(res[i] == "="){
        //         sum = 1
        //     }
        // }



            console.log("RES=", res)

        // console.log(v); 
    
    });


function x(str){
    var args = str.replace(/\s+/g, "").split(/([^\d\.]+)/g); // [ '2', '*', '3', '-', '4', '*', '5' ]
    var arr = ["+" ,"-", "*", "/", "="];
    console.log(args)
    // console.log("parseInt(arr[j])",parseInt(arr[j]))

    var math = function(a, b, op){
        if(op == "="){
            if( a == b){
                return 1
            }else{
                return 0;
            }
        }else{
            console.log("operator is not equal to =")
        }
    }
    // var str = "2 + 2 = 2"

    // var spec = ["="]
    var res = 0;
    for(var i = 0 ; i < args.length; i++){
        for(var j = 0; j<arr.length; j++){
            // if operator
            if(args[i] == arr[j]){
                console.log("args[i]",args[i], "arr[j]", arr[j])
                // if no adjacent paren 
                if(args[i+1] != "(" || args[i+1] != ")" || args[i-1] != "(" || args[i-1] != ")"){
                    // and if no  "="
                    if(args[j] != "="){
                        console.log("in if")
                        // then evel()
                        res += math(args[i-1], args[i+1], arr[j])
                        console.log("math", res)
                    }else{
                        //if "="
                        
                        var z = args[i-1].concat(arr[j]).concat(args[i+1])
                        res += eval(z)
                        console.log("z=", z, "res", res, "eval=", eval(z))
                          // then math()
                    }
                }   
            }
        }
    }
    return res;
}

// x(str)

// console.log(eval("2 = 2"))
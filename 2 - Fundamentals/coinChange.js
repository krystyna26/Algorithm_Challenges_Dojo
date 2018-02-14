function coinChange(cents){
    console.log("Quarters: " + Math.trunc(cents/25));
    cents = cents%25;
    console.log("Dimes: " + Math.trunc(cents/10));
    cents = cents%10;
    console.log("Nickels: " + Math.trunc(cents/5));
    console.log("Pennies: " + (cents%5));
}

var test = 134; // cents -> $1.34
coinChange(test)// Q:5, D:0, N:1, P:4

//  Math.trunc - truncates (cuts off) the dot and the digits to the right of it, 
// no matter whether the argument is a positive or negative number.

// Math.trunc(13.37);    // 13
// Math.trunc(42.84);    // 42
// Math.trunc(0.123);    //  0
// Math.trunc(-0.123);   // -0
// Math.trunc('-1.123'); // -1
// Math.trunc(NaN);      // NaN
// Math.trunc('foo');    // NaN
// Math.trunc();         // NaN
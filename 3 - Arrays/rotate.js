function rotate(arr, R) {
    //Assuming that rotations is positive. 
    //through negative we would need more than one for loop.
    R = R % arr.length;
    if (R % arr.length === 0) {
        // console.log(arr);
        return arr;
    } else {
        var count = 0;
        var index = 0;
        var previous = arr[index];
        for (var i = 0; i < arr.length; i++) { // i=0
            var math = (index + R) % arr.length; // =2
            var temp = arr[math]; // =
            arr[math] = previous;
            previous = temp;
            index = math;
            count += R;
            console.log("math=",math, "arr[math]=", arr[math],"previous=", previous, "index=", index, "count=", count)
            if ((count % arr.length) === 0) {
                count = 0;
                index = (index + 1) % arr.length;
                previous = arr[index];
            }
        }
    }
    return arr;
}
console.log(rotate([1,2,3,4,5,6,7], 2)); // [ 6, 7, 1, 2, 3, 4, 5 ]
console.log(rotate([1,2,3,4,5,6,7], 4)); // [ 4, 5, 6, 7, 1, 2, 3 ]
// Zip arrays into map
function zipMap(arr1, arr2) {
	var result = {};
	for(var i = 0; i < arr1.length; i++) {
		if(result[arr1[i]]) {
            console.log(result[arr1[i]]);
			continue;
		}
		result[arr1[i]] = arr2[i];
	}
	return result;
}

var arrayOne = ['a', 'b', 'c'];
var arrayTwo = [1, 2, 3];
console.log(zipMap(arrayOne, arrayTwo));
// { a: 1, b: 2, c: 3 }
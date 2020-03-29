// sort an unsorted array in place
function insSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      var temp = arr[i];
      for (var k = i; k >= 0; k--) {
        if (temp > arr[k - 1] || k == 0) {
          arr[k] = temp;
          break;
        } else {
          arr[k] = arr[k - 1];
        }
      }
    }
  }
  return arr;
}

var test4 = [6, 4, 8, 2, 61, 3, 12];
console.log("insSort", insSort(test4));

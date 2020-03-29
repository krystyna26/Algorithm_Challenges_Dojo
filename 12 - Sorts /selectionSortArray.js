function selectionSort(arr, start = 0) {
  // console.log("start ", start)
  // console.log("arr begin ", arr)
  if (start >= arr.length) {
    return arr;
  }
  var min = start;
  for (var i = start; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  // console.log("start: ", start, "min ", min);
  var temp = arr[start];
  arr[start] = arr[min];
  arr[min] = temp;
  // console.log("arr end ", arr)
  selectionSort(arr, start + 1);
  // return arr;
}

var test2 = [37, 4, 2, 23, 8];
selectionSort(test2);
console.log("selectionSort", test2);

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = 1;
    for (var x = 0; x < arr.length; x++) {
      if (arr[j] < arr[x]) {
        var temp = arr[x];
        arr[x] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}

var test3 = [6, 2, 62, 9, 12, 4];
console.log("bubbleSort", bubbleSort(test3));

// bubble sort swaps two elements next ot each other if they are in the wrong order

function bubbleSort2(items) {
  var swap = function(firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };

  var len = items.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop - 1; j++) {
      if (items[j] > items[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return items;
}

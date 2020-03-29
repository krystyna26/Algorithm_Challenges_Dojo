//suffix = word-end
function commonSuffix(arr) {
  var str = arr[0];
  var newStr = "";
  var count = 1;
  var k;
  for (var i = str.length - 1; i > 0; i--) {
    for (var j = 1; j < arr.length; j++) {
      k = arr[j].length - count;
      if (str[i] != arr[j][k]) {
        return newStr;
      }
    }
    newStr = str[i] + newStr;
    if (k === 0) {
      return newStr;
    }
    count++;
  }
  return newStr;
}

console.log(commonSuffix(["nice", "ice", "mice"]));
console.log(
  commonSuffix(["deforestation", "citation", "conviction", "incarceration"])
);

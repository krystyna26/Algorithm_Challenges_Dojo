// "aaaabbcddd" -> "a4b2c1d3"

function stringEncode(str) {
  var count = 1;
  var newStr = "";

  for (var i = 1; i <= str.length; i++) {
    var letter = str[i - 1]; // a
    if (str[i - 1] == str[i]) {
      count++;
    } else {
      newStr = newStr + letter + count.toString();
      count = 1;
    }
  }
  return newStr;
}

console.log(stringEncode("aaaabbcddd"));
console.log(stringEncode("dd")); // "d2"

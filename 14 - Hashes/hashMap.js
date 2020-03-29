function HashMap(capacity) {
  this.capacity = capacity;
  this.table = [];
}

function Node(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) return hash;
  for (var i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; //convert-->32b int
  }
  return hash;
};

function mod(input, div) {
  return (input % div + div) % div;
}
// var idx = mod(myHashCode, arrSize);

HashMap.prototype.add = function(key, val) {
  var node = new Node(key, val);
  // var index = key.hashCode() % this.capacity;
  var index = mod(key, val);
  var current;
  if (this.table[index]) {
    current = this.table[index];
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  } else {
    this.table[index] = node;
  }
  return;
};

HashMap.prototype.get = function(key) {
  var index = Hash(key) % this.capacity;
  if (!this.table[index]) {
    return false;
  }
  var current = this.table;
  return;
};

HashMap.prototype.grow = function() {
  this.capacity *= 2;
  this.table.length *= 2;
  var oldArr = this.table;
  this.table = [];
  this.table.length = this.capacity;
  for (var i = 0; i < oldArr.length; i++) {
    if (oldArr[i] != null) {
      this.add(oldArr[i].key, oldArr[i].val);
      var current = oldArr[i];
      while (current.next) {
        current = current.next;
        this.add(current.key, current.val);
      }
    }
  }
  return;
};

var myHash = new HashMap(5);
myHash.add("myKey", [1, 2, 3]);
myHash.add("Yukie", "Japan");
console.log(myHash);

//    0       1     2       3    - index
// [{node},{node},{node},{node}] - table/array of nodes
//            |
//            V
//         {node}                - linked list*
//            |
//            V
//          null

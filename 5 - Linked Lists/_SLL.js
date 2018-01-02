function Node(value){
    this.value = value;
    this.next = null;
}

function SLList() {
    this.head = null;
    this.display = function () {
        var current = this.head;
        var string = "Node values: ";
        while(current.next) {
          string += current.value + ", ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
      }
}

module.exports = Node;
module.exports = SLList;

// const Node = require('./_SLL');
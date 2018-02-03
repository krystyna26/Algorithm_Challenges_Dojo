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
          string += current.value + " -> ";
          current = current.next;
        }
        string += current.value;
        console.log(string);
        return this;
      }
}

SLList.prototype.zipMap = function(arr1, arr2){
    var map = {};
    var end = arr1.length
    if(arr2.length < arr1.length){
        end = arr2.length;
    }
    for(var i=0; i<end; i++){
        if(map[arr1[i]]){
            if(!(map[arr1[i]] instanceof Array)){
                map[arr1[i]] = [map[arr1[i]]]
            }
            var x = arr1[i].push(arr2[i]);
            map([x]);
        } else {
            map[arr1[i] = arr2[i]];
        }
    }
    return map;
}
// https://codereview.stackexchange.com/questions/77682/zip-merge-two-linked-lists-together
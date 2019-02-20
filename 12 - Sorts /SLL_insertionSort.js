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

// SLList.prototype.insertionSort = function(){
//     var sortedList = null;
//     var current = this.head;
//     while(current != null){
//         this.next = current.next;
//         this.sortedInsert(current);
//         current = current.next;
//     }
//     this.head = sortedList;
    
// }

// SLList.prototype.sortedInsert = function(){
//     var newNode = null;
//     if(this.sortedList == null || this.sortedList.value >= newNode.value){
//         newNode.next = this.sortedList;
//         this.sortedList = newNode;
//     }else{
//         this.current = sortedList;
//         while(current.next != null && current.next.value < newNode.value){
//             current = current.next;
//         }
//         newNode.next = current.next;
//         current.next = newNode;
//     }
// }
// --------------------------------------------
// SLList.prototype.insertionSort = function() {
//     var result = null;
//     var item = this.head;
    
//     while (item) {
//         if (!result) {
//             result = { val: item.val };
//         }
//         else {
//             // Find location to insert.
//             var isInserted = false;
//             var item2 = result;
//             while (item2) {
//                 if (item.val < item2.val) {
//                     // Found the spot! First, copy the existing value to shift foward.
//                     var tmp = { val: item2.val, next: item2.next };
                    
//                     // Insert new value.
//                     item2.val = item.val;
//                     item2.next = tmp;
                    
//                     isInserted = true;
//                     break;
//                 }
//                 else if (!item2.next) {
//                     // Last item and nothing is smaller, so add it to the end.
//                     item2.next = { val: item.val };
//                     break;
//                 }
                
//                 item2 = item2.next;
//             }
//         }
        
//         item = item.next;
//     }
    
//     return result;
// };
//---------------------------------
// SLList.prototype.mapSort = function() {
//     var sortedList = [];
//     var map = new Map();
//     var currentId = null;

//     // index the linked list by previous_item_id
//     for (var i = 0; i < this.length; i++) {
//         var current = linkedList[i];
//         if (current.previous_item_id === null) {
//             // first item
//             currentId = current.item_id;
//             sortedList.push(current);
//         } else {
//             map.set(current.previous_item_id, i);
//         }
//     }

//     while (sortedList.length < this.length) {
//         // get the item with a previous item ID referencing the current item
//         var nextItem = this[map.get(currentId)];
//         sortedList.push(nextItem);
//         currentId = nextItem.item_id;
//     }

//     return sortedList;
// }
//-----------------------
SLList.prototype.sort = function(list){
    var current, search
    if(list == null){
        return null;
    }
    var sortedList = list;
    list = list.next;
    sortedList.next = null
    while(list != null){
        current  = list;
        list = list.next;
        if(current.val < sortedList.val){
            current.next = sortedList;
            sortedList = current;
        }else{
            search = sortedList;
            while(search.next){
                
            }
        }
    }
}

var list1 = new SLList();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3.4);
list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(list1.sort())
list1.display();
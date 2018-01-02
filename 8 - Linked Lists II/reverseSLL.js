function SLL(){
    this.head = null;
    this.addNode = function(val){
        if(!this.head){
            this.head = new Node(val)
        }
        else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new Node(val)
        }
    }
}

function Node(val){
    this.val = val;
    this.next = null;
}
var myList = new SLL();
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);
myList.addNode(6);
myList.addNode(7);

console.log(myList)
reverseSLL(myList)
console.log(myList)

function reverseSLL(myList){
    if(!myList.head || !myList.head.next){
        return "We can't reverse empty single linked list"
    }
    var previous = myList.head;
    var current = myList.head.next;
    myList.head['start'] = true;
    while(current){
        current['previous'] = previous;
        current = current.next;
        previous = previous.next;
    }
    myList.head = previous;
    current = myList.head;
    while(!current.start){
        current.next = current.previous;
        delete current.previous
        current= current.next;
    }
    current.next = null;
    delete current.start;
    return myList
}

console.log(reverseSLL(myList))
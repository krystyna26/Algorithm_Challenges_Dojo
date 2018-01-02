function enqueue(list, val){
    var node = new Node(val);
    list.tail.next = node;
    list.tail = node;
}

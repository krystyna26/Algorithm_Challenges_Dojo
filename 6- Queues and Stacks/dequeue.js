function dequeue(list){
    if(list1.head == null || list1.head.next == null){
        list1.head = null;
        return list1;
    }
    var temp = list1.head.val;
    list1.head = list1.head.next;
    return temp;
}

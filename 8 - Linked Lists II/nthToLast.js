function nthToLast(myList, num){
    // remove n-th node from the last node in nodeList
    var count = 0;
    var current = myList.head;
    while(current){
        count++;
        current = current.next
    }
    if(num>count){
        return false;
    }
    current = myList.head;
    for(var i=0; i< count-num; i++){
        current= current.next;
    }
    return current.val;
}
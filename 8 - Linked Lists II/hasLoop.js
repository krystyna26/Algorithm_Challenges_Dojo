function hasLoop(myLst){
    // check if list node has loop
    var current = myList.head;
    while(current){
        if(current.next in myList === true){
            current.next = null;
            return true;
        }else{
            current['inList'] = true;
            current= current.next;
        }
    }
    return false;
}
function removeValue(liasNode, val){
    if(!list.head){
        return false;
    }
    var prev = listNode.head;
    var current = prev.next;
    while(current){
        if(current.val === val){
            prev.next = current.next;
            current = prev.next;
            return listNode;
        }
        prev = prev.next;
        current = current.next;
    }
    return false;
}
    
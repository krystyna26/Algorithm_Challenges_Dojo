function queueContains(queue, val){
    var current = queue.head;
    if(current == null){
        return false;
    }
    while(current){
        if(current.val == val){
            return true;
        }
        current = current.next;
    }
    return false;
}

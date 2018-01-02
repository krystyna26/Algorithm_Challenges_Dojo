function queueSize(queue){
    var count = 1;
    var current = queue.head;
    if(queue.head == null){
        return 0;
    }
    if(queue.head == queue.tail){
        return 1;
    }
    while(current.next != null){
        count++;
        current = current.next;
    }
    return count;
}

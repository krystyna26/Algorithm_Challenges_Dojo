function removeLoop(list){
    if(!list.head){
        return false;
    }
    var status = false;
    var current = list.head;
    while(current){
        current['used'] = true;
        if(current.next['used'] == true){
            current.next = null;
            status = true;
            break
        }
        current = current.next;
    }
    current = list.head;
    while(current){
        current['used'] = false;
        current = current.next
    }
    return status
}
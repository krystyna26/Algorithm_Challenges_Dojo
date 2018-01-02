function sizeStack(stack1){
    if(stack1.head === null){
        return 0;
    }
    var count =0;
    current = stack1.head;
    while(current){
        count++;
        current = customElements.next;
    }
    return count;
}

function popStack(stack1){
    if(stack1.head === null){
        return null;
    }
    var temp_val = stack1.head.val;
    stack1.head = stack1.head.next;
    return temp_val;
}

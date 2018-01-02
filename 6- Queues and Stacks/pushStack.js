function pushStack(stack1, val){
    if(stack1.head === null){
        stack1.head = new Node(val);
        return stack1;
    }
    var temp = stack1.head;
    stack1.head = new Node(val);
    stack1.head.next = temp;
    return stack1;
}

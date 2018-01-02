function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.contains = function(val){
    if(this.root == null){
        return false;
    }else {
        var temp = root;
        while(temp){
            if(temp.val == val){ 
                return true;
            }
            if(val >= temp.val){
                temp = temp.right;
            }else{
                temp = temp.left;
            }
        }
        return false;
    }
}

BST.prototype.add = function(val){
    if(this.root){
        var temp = this.root;
        var node = null;
        while(temp){
            if(val >= temp.val){
                if(!temp.right){
                    node = temp;
                }
                temp = temp.right;
            }else{
                if(temp.left == null){
                    node = temp;
                }
                temp = temp.left
            }
        }
        var newNode = new BTNode(val);
        console.log("node",node)
        if(val >= node.val){

            node.right = newNode;
        }else{
            node.left = newNode;
        }
    }else{
        this.root = new BTNode(val);
        return this;
    }
}

var myBST = new BST();
console.log("adding 2")
myBST.add(2);
myBST.add(7);
myBST.add(5);
console.log("myBST",myBST)


BST.prototype.extraAdd = function(val){
    // if the BST has no root, make the root with the value given and return
    if(!this.root){
        this.root = new BTNode(val);
        return this;
    }
    // if BST has root, assign current to thr root
    var current = this.root;
    while(current){
        // if the value given is grather than or equal to current value
        if(val >= current.val){
            // move right if possible
            if(current.right){
                current = current.right;
            }else{
                // assign the right node to the given value
                current.right = new BTNode(val);
                return this;
            }
        }else{
            // if the value given is less than the current value
            if(current.left){
                // move left if possible
                current = current.left;
            }else{
                //assign left node to the given value
                current.left = new BTNode(val);
                return this;
            }
        }
    }
}

BST.prototype.size = function(node){
    var leftCount = 0;
    var rightCount = 0;
    if(!this.root){
        return 0;
    }
    if(!node){
        node = this.root;
    }
    if(node.left){
        leftCount = this.size(node.left)
    }
    if(node.right){
        rightCount = this.size(sode.right)
    }
    return i + leftCount + rightCount
}

BTNode.prototype.min = function(){
    if(this.root == null){
        return false;
    }
    var current = this.root;
    while(current.left){
        current = current.left;
    }
    return current.left;
    // if(this.left){
    //     return this.left.min();
    // }
    // return this.val;
}

BTNode.prototype.max = function(){
    var current = this.root;
    while(current){
        current = current.right;
    }
    return current.val;
}


BTNode.prototype.height = function(){
    if(!this.left && !this.right){
        return 1;
    }else if(!this.left){
        return 1 + this.right.height();
    }else if(!this.right){
        return 1 + this.left.height();
    }else{
        var leftHeight = this.left.height();
        var rightHeight = this.right.height();
        var maxHeight = leftHeight > rightHeight ? leftHeight : rightHeight;
        return 1 + maxHeight;
    }
}

BST.prototype.orderTraverse = function(){
    if(!this.root){
        return false;
    }else{
        return this.root.orderTraverse();
    }
}

BTNode.prototype.orderTraverse = function(){
    console.log(this.val);
    if(this.left){
        this.left.orderTraverse();
    }
    if(this.right){
        this.right.orderTraverse();
    }
}

myBST.orderTraverse();

BST.prototype.isBalanced = function(){
    if(this.root == null){
        return false;
    }
    var current = this.root;
    if(this.left && this.right){
        var leftHeight = this.left.height();
        var rightHeight = this.right.height();
        var diff = leftHeight - rightHeight;
        if(diff > 1){
            return false;
        }
    }else if(!this.left && this.right){
        return this.right.isBalanced();
    }else if(!this.right && this.left){
        return this.left.isBalanced();
    }else 
        return 1;
}
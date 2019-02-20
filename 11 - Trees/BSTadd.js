function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
    // this.count = 1;
}

function BST(){
    this.root = null;
}

BST.prototype.add = function(val){
    var newNode = new BSTNode(val);
    if(!this.root){
        this.root = newNode;
    }else{
        var temp = this.root;
        while(temp){
            // If value is greater than or equal
            if(val >= temp.val){
                if(!temp.right){
                    temp.right = newNode;
                    break;
                }else{
                    temp = temp.right;
                }
            // If value is less than
            }else if(val < temp.val){
                if(temp.left == null){
                    temp.left = newNode;
                    break;
                }else{
                    temp = temp.left;
                }
            }
        }
    }
    return this;
}

BST.prototype.extraAdd = function(val){
    // if the BST has no root, make the root with the value given and return
    if(!this.root){
        this.root = new BSTNode(val);
        return this;
    }
    // if BST has root, assign current to thr root
    var current = this.root;
    while(current){
        // if the value given is grater than or equal to current value
        if(val >= current.val){
            // move right if possible
            if(current.right){
                current = current.right;
            }else{
                // assign the right node to the given value
                current.right = new BSTNode(val);
                return this;
            }
        }else{
            // if the value given is less than the current value
            if(current.left){
                // move left if possible
                current = current.left;
            }else{
                //assign left node to the given value
                current.left = new BSTNode(val);
                return this;
            }
        }
    }
}

BST.prototype.bstSize = function(node){
    var leftCount = 0;
    var rightCount = 0;
    if(!this.root){
        return 0;
    }
    if(!node){
        node = this.root;
    }
    if(node.left){
        leftCount = this.bstSize(node.left)
    }
    if(node.right){
        rightCount = this.bstSize(node.right)
    }
    return 1 + leftCount + rightCount
}

BST.prototype.min = function(){
    if(this.root == null){
        return false;
    }
    var current = this.root;
    while(current.left){
        current = current.left;
    }
    return current.val;
}

BST.prototype.max = function(){
    var current = this.root;
    while(current.right){
        current = current.right;
    }
    return current.val;
}

BST.prototype.bstHeight = function(node){
    if(!node){
        return 0;
    }else if(!node.left && !node.right){
        return 1;
    }else if(!node.left){
        return 1 + this.bstHeight(node.right);
    }else if(!this.right){
        return 1 + this.bstHeight(node.left);
    }else{
        var leftHeight = this.bstHeight(node.left);
        var rightHeight = this.bstHeight(node.right);
        var maxHeight = leftHeight > rightHeight ? leftHeight : rightHeight;
        return 1 + maxHeight;
    }   
}

var myBST = new BST();
myBST.add(30);
myBST.add(50);
myBST.add(25);
myBST.add(11);
myBST.add(9);
myBST.extraAdd(16);
console.log("Tree size:", myBST.bstSize());
console.log("Tree min value:", myBST.min());
console.log("Tree max value:", myBST.max());
console.log("Tree height:", myBST.bstHeight(myBST.root));
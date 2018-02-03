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

var myBST = new BST();
myBST.add(30);
myBST.add(50);
myBST.add(25);
myBST.add(11);
// myBST.add(9);
console.log("=========== Added to tree =========== ")
console.log(myBST);


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
        rightCount = this.size(node.right)
    }
    return 1 + leftCount + rightCount
}

console.log("Tree size:", myBST.size());



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

console.log("Tree min value:", myBST.min());



BST.prototype.max = function(){
    var current = this.root;
    while(current.right){
        current = current.right;
    }
    return current.val;
}

console.log("Tree max value:", myBST.max());



BST.prototype.height = function(node){
    if(!node.left && !node.right){
        return 1;
    }else if(!node.left){
        return 1 + this.height(node.right);
    }else if(!this.right){
        return 1 + this.height(node.left);
    }else{
        var leftHeight = this.height(node.left);
        var rightHeight = this.height(node.right);
        var maxHeight = leftHeight > rightHeight ? leftHeight : rightHeight;
        return 1 + maxHeight;
    }
    
}

console.log("Tree height:", myBST.height(myBST.root));


// ???????????????????????????????????????????????
BST.prototype.orderTraverse = function(){
    // if(!this.root){
    //     return false;
    // }else{
    //     return orderTraverse(root.left);
    // }

    // console.log(root.data);
    // if(root.left){
    //     this.orderTraverse(root.left);
    // }
    // if(root.right){
    //     this.orderTraverse(root.right)
    // }

    var result = [];
    var node = this.root;
    var traverse = function(node) {
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
}

console.log("Tree after traversing:", myBST.orderTraverse(myBST.root));

// BST.prototype.orderTraverse = function(){
//     console.log(this.val);
//     if(this.left){
//         this.left.orderTraverse();
//     }
//     if(this.right){
//         this.right.orderTraverse();
//     }
// }

// myBST.orderTraverse();



// ???????????????????????????????????????
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

console.log("Is this tree balanced?", myBST.isBalanced());
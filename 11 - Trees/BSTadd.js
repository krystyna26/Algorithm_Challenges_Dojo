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
        // if the value given is grather than or equal to current value
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



BST.prototype.contains = function(val){
    var temp = this.root;
    if(!temp){
        return false;
    }else{
        while(temp){
            if(temp.val === val){
                return true;
            }
            if(val < temp.val){
                temp = temp.left;
            }else{
                temp = temp.right;
            }
        }
    }
    return false;
}

var myBST = new BST();
myBST.add(30);
myBST.add(50);
myBST.add(25);
console.log(myBST);

console.log(myBST.contains(26));
console.log(myBST.contains(50));

myBST.extraAdd(16);
console.log(myBST);

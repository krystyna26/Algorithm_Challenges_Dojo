function BST(){
    this.root = null;
}

function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
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
                temp = temp.left;
            }
        }
        var newNode = BSTNode(val);
        if(val >= node.val){
            node.right = newNode
        }else{
            node.left = newNode;
        }
    }else{
        newNode = BSTNode(val);
        this.root = newNode;
    }
}

var myBST = new BST()
var myBSTNode = BSTNode()
myBSTNode.val = 17;
myBST.add(30)
myBST.add(50)
myBST.add(25)
console.log(myBST)



BST.prototype.contains = function(val){
    if(this.root ==null){
        return false;
    }else{
        var temp = root;
        while(temp){
            if(temp.val === val){
                return true;
            }
            if(val > temp.val){
                temp = temp.left;
            }else{
                temp = temp.right;
            }
        }
        return false;
    }
}




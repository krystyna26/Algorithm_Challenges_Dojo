function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
    // this.count = 1;
}

function BST(){
    this.root = null;
}

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




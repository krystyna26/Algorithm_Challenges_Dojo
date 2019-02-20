function BST(){
    this.root = null;
}

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.balance_LR = function(){
    var temp = this.root;
    var current;
    if(!this.left){
        console.log("no left. we do left rotation")
        current = temp.right;
        current.left = this.root;
        temp.right = null // unattached
        this.root = current;
    }
}
//      left rotation                         
// root             new root                               
// 10                  15                                  
//   \       ->       /  \                                
//    15            10    20                            
//      \                                                
//       20      


BST.prototype.balance_RR = function(){
    if(!this.right){
        console.log("no right")
        current = temp.left;
        current.right = temp;
        temp.left = null;
        this.root = current;
    }
}
//        right rotation
//     root           new root
//     10                5
//     /                / \
//    5        ->      3   10  
//   /
//  3


BST.prototype.balance_D = function(){
    var temp = this.root;
    var current;
    if(!this.left && this.right.left){
        console.log("!this.left && this.right.left")
        current = temp.right;
        last = current.left;
        temp.right = last;
        last.right = current;
        current.last = null;
        if(!this.left){
            console.log("!this.left")
            this.temp.balance_LR();
        }
    }
}
//         root                                 new root
//          10                 10                   13  
//            \                 \                  /  \
//             15       ->       13     ->       10    15
//            /                    \
//          13                      15


BST.prototype.balance_C = function(){
    if(!this.right && this.left.right){
        console.log("!this.right && this.left.right")
        temp = this.root;
        current = temp.left
        last = current.right;
        last.left = current;
        temp.left = last;
        current.right = null;
        if(!this.right){
            console.log("!this.right")
            this.temp.balance_RR();
        }
    }
}
//     root                                 new root
//      10                       10             8
//     /                        /              / \
//    5             ->         8       ->     5   10
//     \                      /
//      8                    5


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

// ??????????????????????????????????????? -------- check if this works --------- ???????
BST.prototype.isBalanced = function(){
    if(this.root == null){
        return false;
    }
    var current = this.root;
    if(this.left && this.right){
        var leftHeight = this.left.bstHeight();
        var rightHeight = this.right.bstHeight();
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

var myBST = new BST();
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
// var node4 = new Node(3.4);
// var node5 = new Node(9);
myBST.root = node1;
node1.right = node2;
node2.right = node3;
// node1.left = node4;
// node3.right = node5
//      6
//     / \
//    3   7
//         \
//          8
//           \
//            9
// console.log("Balanced ? ", myBST.bal());
console.log("Is this tree balanced?", myBST.isBalanced());












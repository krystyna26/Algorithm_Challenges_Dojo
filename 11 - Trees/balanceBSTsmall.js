function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.bal = function(){
    if(this.root == null){
        return false;
    }else {
        var temp = this.root;
        var current;
        var last;
        if(!this.left){
            current = temp.right;
            current.left = this.root;
            temp.right = null // unattached
            this.root = current;
        }else if(!this.right){
            current = temp.left;
            current.right = temp;
            temp.left = null;
            this.root = current;
        }else if(!this.left && this.right.left){
            current = temp.right;
            last = current.left;
            temp.right = last;
            last.right = current;
            current.last = null;
            if(!this.left){
                // return this.bal(temp) ???????????
                current = temp.right;
                current.left = this.root;
                temp.right = null // unattached
                this.root = current;
            }
        }else if(!this.right && this.left.right){
            temp = this.root;
            current = temp.left
            last = current.right;
            last.left = current;
            temp.left = last;
            current.right = null;
            if(!this.right){
                current = temp.left;
                current.right = temp;
                temp.left = null;
                this.root = current;
            }
        }
    }
}
// root             new root                               root           new root
// 10                  15                                   10                5
//   \       ->       /  \                                  /                / \
//    15            10    20                               5        ->      3   10  
//      \                                                 /
//       20                                              3
//              left rotation                                right rotation



//         root                                 new root
//          10                 10                   13  
//            \                 \                  /  \
//             15       ->       13     ->       10    15
//            /                    \
//          13                      15



//     root                                 new root
//      10                       10             8
//     /                        /              / \
//    5             ->         8       ->     5   10
//     \                      /
//      8                    5
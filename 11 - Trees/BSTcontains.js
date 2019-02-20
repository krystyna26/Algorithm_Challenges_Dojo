function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
    // this.count = 1;
}

function BST(){
    this.root = null;
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
var node1 = new Node(6);
var node2 = new Node(7);
var node3 = new Node(8);
var node4 = new Node(3.4);
myBST.head = node1;
node1.right = node2;
node2.right = node3;
node1.left = node4;


console.log(list1.contains(26));
console.log(list1.contains(8));

// ----------------------------- doesn't work
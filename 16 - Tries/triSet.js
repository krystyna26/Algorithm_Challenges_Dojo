function triSet(){
    this.root = null;
}

function triNode(val){
    this.val = val;
    this.children = [];
    this.terminalLetter = false;
}

triSet.prototype.insert = function(str){
    if(!this.root){
        this.root = new triNode("");
    }
    var child = this.root.children[];
    var node = null;
    for(var i=0; i<str.length; i++){
        var found = false;
        for(var j=0; j<this.children.length; j++){
            if(str[i] === this.children[j].val){
                child = child[j].children;
                found = true;
                break;
            }else{
                found = false;
            }
            if(!found){
                node = new triNode(str[i]);
                child.push(node);
            }
            child = child[children.length-1].children
        }
        node.terminalLetter = true;
    }
    return;
}
// ======================================================
function recur(str, arr, node){
    if(node.children.length === 0){
        return;
    }
    for(var i=0; i<node.children.length; i++){
        str = str + node.children[i].val;
        if(node.children[i].terminalLetter){
            arr.push(str);
        }
        recur(str, arr, node.children[i]);
    }
}

triSet.prototype.autocomplete = function(str){
    let arr = [];
    let runner = this.root;
    for(let idx = 0; idx<str.length; idx++){
        let found = false;
        for(let j=0; j<runner.children.length; j++){
            if(str[idx]== runner.children[j].val){
                runner = runner.children[j];
                // found = true;
                break;
            }
        }
        if(runner.children.length == 0){
            return false;
        }
    }
    recur(str, arr, runner);
    return arr;
}
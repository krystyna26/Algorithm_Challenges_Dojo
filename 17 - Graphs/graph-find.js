function find(graph, start, end, dict){
    if(graph[start][end]>0){
        return true;
    }
    for(let i=0; i<graph[start].length; i++){
        if(graph[start][i]>0 && !dict[start]){
            if(find(graph, i, end, dict)){
                return true;
            }
        }
    }
    return false;
}

var g = [[ 0,-1, 1,-1,-1,-1],
         [ 1, 0,-1, 1, 1,-1],
         [ 1, 1, 0,-1,-1,-1],
         [-1,-1,-1, 0, 1,-1],
         [-1,-1,-1, 1, 0,-1],
         [-1,-1,-1, 1, 1, 0]];

var s = 2;
var e = 5;
var d = {};

console.log(find(g,s,e,d));
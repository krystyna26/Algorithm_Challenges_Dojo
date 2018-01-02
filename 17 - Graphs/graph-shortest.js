function shortest (map, root){
    var dist = [Infinity] * map.length;
    var visited = [false] * map.length;
    var stack = [];
    dist[root] = 0;
    stack.push(root);
    visited[root] = true;
    while(stack.length>0){
        var current = stack.pop();
        for(var i=0; i<map[current].length; i++){
            if(map[current][i]>0){
                if(!visited[i]){
                    stack.push(i);
                    visited[i] = true;
                }
                if(dist[i] > map[current][i] + dist[current]){
                    dist[i] = map[current][i] + dist[current];
                }
            }
        }
    }
    return dist;
}

var g = [[ 0, 3,-1,-1,-1],
         [ 3, 0, 1, 6,-1],
         [-1, 1, 0, 2, 4],
         [-1, 6, 2, 0,-1],
         [-1,-1, 4,-1, 0]];


var root = 3;

console.log(shortest(g, root));



function shortestWithParent (map, root){
    var dist = [Infinity][0] * map.length;
    var visited = [false][0] * map.length;
    var queue = [];
    dist[root] = 0;
    queue.push(root);
    visited[root] = true;
    while(queue.length>0){
        var current = queue.shift();
        for(var i=0; i<map[current].length; i++){
            if(map[current][i]>0){
                if(!visited[i]){
                    stack.push(i);
                    visited[i] = true;
                }
                if(dist[i][0] > map[current][i] + dist[current][0]){
                    dist[i][0] = map[current][i] + dist[current][0];
                }
            }
        }
    }
    return dist;
}
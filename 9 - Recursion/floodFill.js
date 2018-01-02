function floodFill(canvas,startXY, newColor){
    var x = startXY[0]
    var y = startXY[1]
    var startColor = canvas[y][x]
    function changeColor(x, y){
        if(canvas[y][x] == start){
            canvas[y][x] = newColor;
            changeColor(x+1, y);
            changeColor(x-1, y);
            changeColor(x, y-1);
            changeColor(x, y+1);
        } else {
             return;
        }
    }(x, y)
}

var can = [ [1,2,3,4,5],
            [2,2,3,3,4],
            [5,4,3,2,1],
            [3,2,3,2,3],
            [2,2,3,4,5] ]
var s = [2,2]
var nc = 8

console.log(floodFill(can, s, nc))
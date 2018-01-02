function zipMap(arr1, arr2){
    var map = {};
    var end = arr1.length
    if(arr2.length < arr1.length){
        end = arr2.length;
    }
    for(var i=0; i<end; i++){
        if(map[arr1[i]]){
            if(!(map[arr1[i]] isinstanceof Array)){
                map[arr1[i]] = [map[arr1[i]]]
            }
            map[arr1[i].push(arr2[i])
        } else {
            map[arr1[i] = arr2[i];]
        }
    }
    return map;
}
    
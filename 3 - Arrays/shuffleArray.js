function shuffleArray(arr){
    for(var i = arr.length-1; i > 0; i--){
        var enter = Math.floor(Math.random()*(i+1));
        var temp = arr[i];
        arr[i] = arr[enter];
        arr[enter] = temp;
    }
    return arr;
}

var arr1 = [1, 2, 3, 4, 5];
console.log(`Before shuffling: ${arr1}`);
shuffleArray(arr1);
console.log(`After shuffling: ${arr1}`);
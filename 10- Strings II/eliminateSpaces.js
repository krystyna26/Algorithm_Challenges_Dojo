// "how to make a soup" -> "how%20to%20make%20a%20soup"
function eliminateSpaces(str){
    var counter = 0;
    
    var tempLast;
    for(var i = 1 ; i < str.length; i++){
        if(str[i] == " "){
            counter++;
        }
    }
    // console.log("counter", counter)
    var arr = str.split("");
    console.log("arr", arr)

    var last = arr.length;
    tempLast = counter*2 + last;
    // str.length = tempLast;
    // console.log("str.len", str.length)
    console.log("tempLast", tempLast)
    while(last > 0){
        // console.log("last", last)
        if(arr[1] == " "){
            console.log("arr[last-1]",arr[last-1])
        //     console.log("yes")
            arr[tempLast-1] = "0";
            arr[tempLast-2] = "2";
            arr[tempLast-3] = "%";
            tempLast = tempLast - 3;
            console.log("temp",tempLast)
            // console.log("str[tempLast-2]",str[tempLast-2])
        }else{
            console.log("str[last-1]",str[last-1])
            // console.log("str[tempLast-1] before",str[tempLast-1] )
        //     arr[tempLast-1] = arr[last-1];
        //     // console.log("str[tempLast-1]  after",str[tempLast-1] )
        //     tempLast--;
        }
        last--;
    }
    return arr.toString();
}
// var ar = ["h","o","w"," ","a","r","e"," ","y","o","u"]
var ar = "how to make a soup"
console.log(eliminateSpaces(ar)); // "how%20are%20you"
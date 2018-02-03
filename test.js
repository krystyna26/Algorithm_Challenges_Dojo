function lengthOfLongestSubstring(str){
    var len = str.length;
    var sub0 = {};
    var sub1 = {};
    var subStr0 = "", subStr1 = "";
    for(var i = 0; i< len; i++){
        if(sub0[str[i]] == undefined){
            sub0[str[i]] = i;
            // console.log("sub0[str[i]]=",sub0[str[i]])
            // console.log("str[i]=",str[i])
            subStr0 +=str[i];
            // console.log("if(sub0[str[i]] == undefined) subStr0=",subStr0)
        }else{
            if(subStr0.length > subStr1.length){
                // console.log("sub0.length=",sub0.length,"sub1.length=",sub1.length)
                sub1 = sub0;
                subStr1 = subStr0
            }
            sub0 = {};
            sub0[str[i]] = i;
            // console.log("sub0[str[i]]",sub0[str[i]])
            subStr0 = str[i];
            // console.log("subStr0",subStr0)
        }
    }
    if(subStr0.length > subStr1.length){
        return subStr0;
    }else{
        return subStr1;
    }

}

console.log(lengthOfLongestSubstring("abcabcbb"))
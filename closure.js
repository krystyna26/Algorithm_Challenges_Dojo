
var user = {"username": "Sally", "profile": { "name": "Sally Clojurian", "address": { "city": "Austin", "state": "TX"}}}

function getFunc (obj, par, definition){
    if(!obj){
        console.log("definition", definition)
        return definition
    }else{
        console.log("obj", obj);
        console.log("obj[par]:", obj[par]);
        console.log("par:", par);
        return obj[par]
    }
}
var get = getFunc();


// function reduce(f, acc, t){
//         for( v in t ) {
//             acc = f(acc, v)
//             return acc
//         }
//     }
function get_in(user, arr, not_found){
    // if(!not_found){
    //     return reduce(get, user, arr);
    // }else {
        // console.log("vvvvvvvvvvvvvvvvvv", v)
        if(arr.length == 0){
            // console.log("user:", user)
            return user;
        }else{
            console.log("arr sliced", arr.slice(0,1))
            var v = getFunc(user, arr.slice(0,1));
                if(!v){
                    // console.log("not found:", not_found)
                    if(not_found){
                        return not_found;
                    }else{
                        return null;
                    }
                }else{
                    console.log("vvvvvvvvvvvvvvvvvv", v)
                    // console.log("recursion called")
                    // console.log("rest of array:", arr.slice(1))
                    return get_in(v, arr.slice(1), not_found)
                }
        }
    // }
}

// console.log("get-in til name:",get_in(user, [ "profile", "name"]))
// "Sally Clojurian"

// console.log("get-in til city:",get_in(user, [ "profile", "address", "city"]))
// "Austin"

// console.log("get-in til city:",get_in(user, [ "profile", "address", "zip-code"]))
// null

console.log("get-in til city:",get_in(user, [ "profile", "address", "zip-code"], "no zip code"))
// "no zip code"





var employee = {"name": "John", "details": { "email":"john@gmail.com", "phone":"234-567-8901"}}
console.log(get_in(employee, ["details", "email"]))
// "john@gmail.com"


var owners = [{"owner": "Jimmy", 
                "pets": [{"name":"Rex", "type":"dog"}, 
                        {"name":"Sniffles", "type":"hamster"} ] },

             {"owner":"Jacky",
                "pets": [{"name":"Spot", "type":"mink"}, 
                         {"name":"Puff", "type":"magic-dragon"} ] }]
console.log(get_in(owners, [0, "pets"]));
// [{:name "Rex", :type :dog} {:name "Sniffles", :type :hamster}]



var arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(get_in(arr, [0, 2]));
// 3
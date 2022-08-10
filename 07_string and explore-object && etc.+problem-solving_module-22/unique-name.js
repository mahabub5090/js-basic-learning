const names = ["abul", "kabul", "babul", "ciku", "motu-patlu", "star", "ciku", "habu", "kabul", "habul", "abul", "abul", "habu", "motu-patlu", "babul"]
function uniqueNames(input){
    let unique = [];
    for (i = 0; i < input.length; i++){
        let element=input[i]
        if (unique.includes(element) ===false)
         { unique.push(element) }
        }
        return unique;
}
const result = uniqueNames(names)
console.log(result
)
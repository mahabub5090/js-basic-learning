function reverseString(str) {
    let element = str.split(" ");
    let reversed = [];
    console.log(element)
    for (i = (element.length - 1); i >= 0; i--) {
        let word = element[i];
        reversed.push(word);
    }
    let reverse = reversed.join(" ");
    return reverse; 
}
const string = "I am a good boy"
const result = reverseString(string)
console.log(result)
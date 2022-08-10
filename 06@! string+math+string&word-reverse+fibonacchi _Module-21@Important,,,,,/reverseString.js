function reverseString(str) {
    let reverse = "";
    for (i = (str.length-1); i >= 0; i--){
      reverse =reverse+str[i]
       console.log(str[i],reverse)
    }
    return reverse; 
}
const string = "I am a good boy."
const result = reverseString(string)
console.log(result)
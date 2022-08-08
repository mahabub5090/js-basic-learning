function sum(arr) {
    let number = 1
    let i = arr
    while (i >= 1)
        number = number * i,
        i--;
    

    return number;
}

let result = sum(7)
console.log(result)
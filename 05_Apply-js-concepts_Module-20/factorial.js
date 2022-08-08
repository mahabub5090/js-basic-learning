function sum(arr) {
    let number = 1

    for (i = 1; i <= arr; i++) {


        number = number * i;


    }
    return number;
}

let result = sum(7)
console.log(result)
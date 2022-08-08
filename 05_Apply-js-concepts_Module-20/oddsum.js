function sum(arr) {
    let number = 0

    for (i = 0; i < arr.length; i++) {

        let numbers = arr[i]
        number = number + numbers;


    }
    return number;
}


function oddNumber(odd) {
    let num = []
    for (i = 0; i < odd.length; i++) {
        let element = odd[i]
        if (element % 2 !== 0)
            num.push(element)

    }
    return num;
}

const myNumbers = [4, 52, 53, 74, 79, 27, 65]
let oddNum = oddNumber(myNumbers)
let result = sum(oddNum)
console.log(result)
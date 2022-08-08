// 1
// function isPositive(num)
// {
//     if (num > 0)
//         return (num, "The number is positive");
//     else if (num < 0)
//         return (num, "The number is nagetive");
//     else
//         return "This is Zero(0)"

// }
// const numeber = -11
// const result1 = isPositive(numeber)
// console.log(result1)

// 2

// 3

// function findArea(h, b) {
//     const result = (1 / 2) * b * h;
//     return result;
// }

// const height = 30
// const base = 25
// const result3 = findArea(height, base)
// console.log(result3)

// 4

// function findArea(h, w)
// {
//     const result = h * w;
//     return result;
//  }
// const height = 20
// const weight = 10
// const result4 = findArea(height, weight)
// console.log(result4)


// 5

// function square(num) {
//     const value = num * num;
//     return value;
// }
// const number = 5
// const result6 = square(number)
// console.log(result6)

// 6

function odd(arr) {
    oddArray=[]
    for (i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num > 10 && num < 50)
            if (num % 2 !== 0)
              oddArray.push(num)  
                            
    }
    return oddArray;
}
function sum(plus) {

    let numbers = 10
    for (n = 0; n < plus.length; n++) {
        let number = plus[n]
       numbers = numbers + number
       

    }
    return numbers;
}

let array = [20, 11,19, 9, 0, 55, 72, 87, 36, 33, 41, 12, 41, 28, 21, 39, 73, 46, 63]
let oddNumber = odd(array)
console.log("The odd numbers are:", oddNumber)
let result6 = sum(oddNumber)
console.log("sum of all odd numbers is:", result6)
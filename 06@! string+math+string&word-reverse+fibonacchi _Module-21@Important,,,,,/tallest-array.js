function tallestNumber(numbers) {
    let tallest = numbers[0]
    for (i = 0; i < numbers.length; i++){
        let element = numbers[i]
        if (element > tallest)
            tallest = element;
    }
    return tallest;
}
const array = [20, 32, 32, 33, 24, 9, 64, 25]
const result = tallestNumber(array)
console.log(result)
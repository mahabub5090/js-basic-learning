function tallestNumber(numbers) {
    let smallest = numbers[0]
    for (i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        if (element <smallest)
            smallest = element;
    }
    return smallest;
}
const array = [20, 32, 32, 33, 24, 9, 64, 25]
const result = tallestNumber(array)
console.log(result)
 
// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।
// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area(আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।
// ৫.(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

// 1
// function tallestNumber(numbers) {
//     let smallest = numbers[0]
//     for (i = 0; i < numbers.length; i++) {
//         let element = numbers[i]
//         if (element < smallest)
//             smallest = element;
//     }
//     return smallest;
// }
// const array = [20, 32, 32, 33, 24, 9, 64, 25]
// const result = tallestNumber(array)
// console.log(result)

// 2

// let number1 = 10;
// let number2 = 20;
// let number3 = 30;
// if (number1 > number2 && number1 > number3) {
//     console.log("The largest number is:",number1)
// }
// else if (number2 > number1 && number2 > number3) {
//     console.log("The largest number is:",number2)
// }
// else{
//     console.log("The largest number is:",number3)
// }

// 3
// function avarage(avg) {
//     let sum = 0
   
//     for (i = 0; i < avg.length; i++){
//         let element = avg[i]
//         sum = sum + element
       

//     }
   
//     let item = avg.length ;
//     const avarageOfArray = sum / item;
//     return avarageOfArray;
// }

// const array = [10, 10,10,10,10]
// const result = avarage(array)
// console.log(result)

// 4

// function trangleArea(base, height) {
//     let areaOfTrangle = (1 / 2) * base * height;
//     return areaOfTrangle;
// }
// const baseOfTrangle = 10;
// const heightOfTrangle = 20;
// const result = trangleArea(baseOfTrangle, heightOfTrangle)
// console.log(result)

// 5

// function secondLargest(arr) {
//     let number = arr;
//     let firstLargestNumber = Math.max(...number);
//     let first = number.indexOf(firstLargestNumber);
//     number.splice(first, 1);
//     let secondLargestNumber=Math.max(...number)
//     return secondLargestNumber;
// }

// const array = [-100, -20, -30, -70, -40, -50, -10, -20]
// const result = secondLargest(array)
// console.log(result)

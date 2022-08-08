// 1
// function foo() { console.log(foo) }
// function bar() { console.log(bar) }
// foo(bar())
// foo()
// 2
// function make_avg(a, b, c)
// {
//    var sum = a + b + c;
//   var avg = sum / 3;
//     return avg;
// }
// avgN = make_avg(5, 6, 7)
// console.log(avgN)
// 3

// let array = [23, 34, 53, 54, 12, 43, 32, 42]

// function numbers(num) {
//     let number = 0
//     for (i = 0; i < num.length;i++)
//     {
//         let element = array[i]
//         number = number + element
//         total=number+num.length
//    }
//      return ("total with length:",total);
// }
// let sum = numbers(array)
// let result=sum/(array.length+1)
// console.log(result)

// 2
//
// function Odd_Even(num)
// {
//     if (num % 2 == 0)
//         return "This is Even number";
//     else
//         return "This is Odd number"
// }

// let number=11
// let result0 = Odd_Even(number)
// console.log(result0)

// 5

// function color(colorName) {
//     switch (colorName) {
//         case (colorName = "red"):

//             console.log("This is Danger for you");

//             break;

//         case (colorName = "yellow"):
//                console.log
//                 ("Stop here");
//             break;

//         default:
//             console.log("You can go now");

//     }

// }


// let singnal ="yellow"
//  color(singnal)






/*Extra প্রাকটিস চ্যালেঞ্জ (৪ টি প্রব্লেম): 
—--------------
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  



—----------
Extra
—--------------
৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা।


==============================================
*/

// 1

// function multiplication(num) {
  
//     for (i = 1; i <= num; i++)
//     {
//    console.log(num,"+", i , "=", num*i)

//     }
// }
// var number= 13
// multiplication(number)

// 2

// function caseChanger(text)
// {
//     const name = text.toLowerCase()
//     return name;
// }
// let uppercase = "RAhIM"
// let result2 = caseChanger(uppercase)
// console.log(result2)

// 3

// function fullName(first, last)
// {
//     const full = first + " " + last;
//     return full;
// }

// const firstName = "Md. Mahabubar"
// const lastName = "Rahman"
// const result3 = fullName(firstName, lastName)
// console.log(result3)

// 4

// function square(num) {
//     const value = num * num;
//     return value;
// }
// const number = 5
// const result4 = square(number)
// console.log(result4)

//5

// const pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
// }
// const result5= pizza.toppings[2]
// console.log(result5)

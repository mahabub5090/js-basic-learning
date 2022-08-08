// 01
var fruit = ["apple", "banana", "orange"]
console.log(fruit)
console.log(fruit.indexOf("banana"))
fruit[2] = "mango"
console.log(fruit)
var rmv = fruit.pop()
console.log(fruit)
fruit.push("watermelon")
console.log(fruit)
// 02
const score= prompt("Number:")

if (score => 80) { console.log("You got A+") }
else if (score => 60) { console.log("You got B+") }
else if (score => 50) { console.log("You got C+") }
else if (score => 40) { console.log("You got D+") }
else { console.log("You failled") }







// 
// if (myScore >= 80) { console.log("Myself got A+") }
// else if (myScore >= 60) { console.log("Myself got B+") }
// else if (myScore >= 50) { console.log("Myself got C+") }
// else if (myScore >= 40) { console.log("Myself got D+") }
// else { console.log("Myself failled") }
// if (tomScore >= 80) { console.log("Tom got A+") }
// else if (tomScore >= 60) { console.log("Tom got B+") }
// else if (tomScore >= 50) { console.log("Tom got C+") }
// else if (tomScore >= 40) { console.log("Tom got D+") }
// else { console.log("Tom failled") }
// if (janeScore >= 80) { console.log("Jane got A+") }
// else if (janeScore >= 60) { console.log("Jane got B+") }
// else if (janeScore >= 50) { console.log("Jane got C+") }
// else if (janeScore >= 40) { console.log("Jane got D+") }
// else { console.log("Jane failled") }
// if (petterScore >= 80) { console.log("Petter got A+") }
// else if (petterScore >= 60) { console.log("Petter got B+") }
// else if (petterScore >= 50) { console.log("Petter got C+") }
// else if (petterScore >= 40) { console.log("Petter got D+") }
// else { console.log("Petter failled") }
// if (johnScore >= 80) { console.log("John got A+") }
// else if (johnScore >= 60) { console.log("John got B+") }
// else if (johnScore >= 50) { console.log("John got C+") }
// else if (johnScore >= 40) { console.log("John got D+") }
// else { console.log("John failled") }
// 3
// 3.1
var num1 = 13
var num2 = 79
var num3 = 25
if (num1 > num2 && num1 > num3) { console.log("The biggest Number is:", num1) }
else if (num2 > num1 && num2 > num3) { console.log("The biggest Number is:", num2) }
else { console.log("The biggest Number is:", num3) }
// 3.2
var side1 = 9
var side2 = 8
var side3 = 9
if (side1 == side2 || side1 == side3 || side2 == side3) { console.log("This is Isosceles triangle") }
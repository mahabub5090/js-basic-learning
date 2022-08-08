// john mother give him some money and told him to buy some apple and orange ,1 kg apple price 700 taka and one kg orange price 300 taka,so how much extra money john's mother give him??suppose, john's mother give him 5000 taka,and he will buy 3 kg orange and 2 kg apple solved it by js.
var givenTaka = 5000
var orangePrice = 300
var applePrice = 700
var quantity1 = 3
var quantity2 = 2
var sum = (orangePrice * quantity1) + (applePrice * quantity2)
var extraMoney = givenTaka - sum
console.log(extraMoney)
// a students subject and marks are: mathsmatics-75.25, biology-65,chemistry-80, physics-35.45 , bangla-99.50 | now give us the "gor" of all subjects marks,answer should be only 2 world,
var math1 = 75.25
var biology2 = 65
var chemistry3 = 80
var physics4 = 35.45
var bangla5 = 99.5
var totalNumber = math1 + biology2 + chemistry3 + physics4 + bangla5
var gorNumber = totalNumber / 5
console.log(parseFloat(gorNumber.toFixed(2))) 
// john's teacher gave him two variables.each variable contains a string. jhon's teacher asked him tocombine these tw strings and print them in one line.help john to write the program in js . suppose 1st string is "jhon is a" and 2nd is  "web developer"
var firstSentence = "john is a"
var secondSentence = "web developer"
var fullSentence = firstSentence +" "+ secondSentence
console.log(fullSentence)
// sarah's mother is a teaching her mathemathics. she gava her a number and asked what the reminder would be if she devider the number by 5.help sarah's to write this program.suppose the  number is 119.
var givenNumber = 119
var dividerNumber = 5
var reminderNumber = givenNumber % dividerNumber
console.log(reminderNumber)
function complexInterest(p, n, r, t) {
  let rDecimal = (r / 100);
  let number = (1 + (rDecimal / n));
  let power = (n * t);
 let nr = (Math.pow(number, power));
  let profit = (p * nr) - p;
  return profit;
  
}

let mainAmount = 10000;
let frequencyN = 12;
let interestRate = 10;
let time = 10;
let result = complexInterest(mainAmount, frequencyN, interestRate, time)
console.log(result)


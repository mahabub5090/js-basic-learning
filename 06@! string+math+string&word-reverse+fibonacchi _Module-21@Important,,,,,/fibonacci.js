let fibo = [0, 1]
for (i = 2; i <25; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo)
function sum(arr)
{
    let number = 0
   
    for (i = 0; i < arr.length; i++)
    {
       
        let numbers = arr[i]
      number = number + numbers;

        
    }
    return number;
}
const myNumbers = [753, 46, 836, 16, 898, 236, 32]
let result = sum(myNumbers)
console.log(result)
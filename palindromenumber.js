//Objective is to see whether a number is a palindrome. '121' is an example.
//Negative numbers cannot be palindromes.

let number = 121


//O(logn) solution that divides the number by 10 and adds the remainder to a
//new temp value. It checks whether the temp and original are the same.

let result = 0
let temp = number

while (temp > 0) {
    //Shift the digits and add the remainder
    result = (result * 10) + (temp % 10)
    temp = Math.floor(temp / 10)
}

return number == result

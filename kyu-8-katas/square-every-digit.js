// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// MATHEMATICSFUNDAMENTALS

function squareDigits(num){
    //return Number(String(num).split('').map(e => e*e).join(''));
    const strOfNum = String(num);
    const arrOfSquares = strOfNum.split('').map(e => e*e);
    return Number(arrOfSquares.join(''));
  }

// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
// A number

// Return
// What is being asked to be returned and what is the type?
// a number where every single digit was squared and each square was concat together

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain 
// arguments. Can you think of any edge cases?
//squareDigits(3212), 9414
//squareDigits(2112), 4114
//squareDigits(0), 0

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and 
// what steps need to be taken to get to our expected return. All statements showing "dependency" 
// are to be indented.
//split the number into individual digits, square each digit, concat them back together and return
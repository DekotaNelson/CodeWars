// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let arrayOfNums = numbers.split(' ').sort((a, b) => a - b);
    return `${arrayOfNums.slice(-1)} ${arrayOfNums[0]}`;
  }

// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
//a string of one or more numbers seperated by a space

// Return
// What is being asked to be returned and what is the type?
//return a string of the highest number, a space, and the lowest number

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain 
// arguments. Can you think of any edge cases?
//("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
//("1 2 3"), "3 1")

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and 
// what steps need to be taken to get to our expected return. All statements showing "dependency" 
// are to be indented.
//split the input into an array, sort the aray from high to low, stringify and concat first and last indexs with a space in between
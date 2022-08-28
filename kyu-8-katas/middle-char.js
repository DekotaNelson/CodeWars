// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
    let strLength = s.length;
    if(strLength % 2 === 0){
      return  s.slice((strLength / 2 - 1), (strLength / 2 + 1))
    }else{
      return s.slice((Math.ceil(strLength / 2 - 1)), (Math.ceil(strLength / 2)))
    }
  }

//   function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
//A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// Return
// What is being asked to be returned and what is the type?
//The middle character(s) of the word represented as a string

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain 
// arguments. Can you think of any edge cases?
//("test"),"es")
//("testing"),"t")
//("A"),"A")

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and 
// what steps need to be taken to get to our expected return. All statements showing "dependency" 
// are to be indented.
//count the length, check if length is even or odd, divide length by two, if length was odd, return that index with math ceiling, if even return that index and that index +1
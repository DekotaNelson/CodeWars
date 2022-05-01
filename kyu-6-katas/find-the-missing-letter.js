// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
    let str = array.join('')
    let ans
    for(i = 1; i < str.length; i ++){
        console.log(str.charCodeAt(i))
        
      if(str.charCodeAt(i) === ((str.charCodeAt(i - 1)) - 3)){
        ans = (str.charCodeAt(i - 1) + 1)
        break
      }
    }
    return ans
  }

  console.log(findMissingLetter(['a','b','c','d','f']))
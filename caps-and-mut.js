// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  
  // Parameters
  // What is the type of argument being inputted and are there multiple or default arguments?
  //string with a single word 
  
  // Return
  // What is being asked to be returned and what is the type?
  //return capitalized parameter (string contaiining a single word)
  
  // Example
  // Provide 2-3 examples of what we expect to happen if we call the function with certain 
  // arguments. Can you think of any edge cases?
  //'cat' -> 'Cat'
  //'bobby' -> 'Bobby'
  //'i' -> 'I'
  //no numbers, special chars, or non-string types will be passed in. string length will be 1-10 
  //and will never be empty
  
  // Pseudocode
  // Write informal steps on how to solve the problem. Think about what the parameters are and 
  // what steps need to be taken to get to our expected return. All statements showing "dependency" 
  // are to be indented.
  //take a string with only one word, capitolize only the first letter, and return the new capitolized string
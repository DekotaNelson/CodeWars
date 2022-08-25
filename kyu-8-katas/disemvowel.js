// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
  }
  
  // Parameters
      // What is the type of argument being inputted and are there multiple or default arguments?
      //a string 
      
      // Return
      // What is being asked to be returned and what is the type?
      //return the parameter as a string with no vowels
      
      // Example
      // Provide 2-3 examples of what we expect to happen if we call the function with certain 
      // arguments. Can you think of any edge cases?
      //"This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
      //"No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
      //(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
      
      // Pseudocode
      // Write informal steps on how to solve the problem. Think about what the parameters are and 
      // what steps need to be taken to get to our expected return. All statements showing "dependency" 
      // are to be indented.
      //take a string parameter, loop through each char, if vowel, splice it out
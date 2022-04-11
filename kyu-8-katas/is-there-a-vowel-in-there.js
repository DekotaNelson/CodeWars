// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    return a.map((code, i) =>{
      if(code === 97){
         return 'a'
      }
      else if(code === 101){
         return 'e'
      }
      else if(code === 105){
         return 'i'
      }
      else if(code === 111){
         return 'o'
      }
      else if(code === 117){
         return 'u'
      }
      else{
        return code
      }
    })
  }
// Write a function that checks if a given string (case insensitive) is a palindrome. (A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.)

function removeZeros(x) {
   while(String(x).endsWith('0')){
    x = x.slice(0, (x.length - 1));
  }
  return x;
}

  console.log(isPalindrome('1110000'))
// Write a function that checks if a given string (case insensitive) is a palindrome. (A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.)

function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
  }
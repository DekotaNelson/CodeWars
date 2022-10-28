// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    if(number <= 0){
      return 0
    }
    let total = 0
    for(i = 1; i < number; i++){
      if(i % 3 === 0){
        total += i
      }
      else if(i % 5 === 0){
        total += i
      }
    }
    return total
  }
  
  // P Num, if neg return 0
  
  // R sum of all multiples of 3 and 5 
  
  // E 10,23
  
  // P find multiples of 3 and/or 5 up to provided num then sum the total
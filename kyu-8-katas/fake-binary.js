// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    return x.toString('').split('').map((e) => e < 5 ? 0 : 1).join('');
}

function fakeBin(x){
  let ans = ''
  x.toString('').split('').forEach((e) => {
    if(e < 5){
      ans += '0'
    }
    else{
      ans += '1'
    }
  })
  return ans
}

console.log(fakeBin('45385593107843568'))
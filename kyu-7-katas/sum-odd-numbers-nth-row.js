// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	let nRowStart = 1
  for(i = 1; i < n; i++){
    nRowStart += i*2
  }
  let sum = n === 1 ? 1 : nRowStart
  for(i = 1; i < n; i++){
    sum += nRowStart + (2*i)
  }
  return sum
}
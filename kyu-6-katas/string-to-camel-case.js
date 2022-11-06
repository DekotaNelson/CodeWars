// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str){
//     let hy = 0
//     let un = 0
//     if(str === ''){
//       return ''
//     }
//     return str.split('-').map((e,i) => {
//       if(hy===0){
//         hy++
//         return e;
//       }
//       else{
//         let splitWord = e.split('');
//         splitWord[0] = splitWord[0].toUpperCase();
//         return splitWord.join('')
//       }
//     }).join('').split('_').map((e,i) => {
//       if(un===0){
//         un++
//         return e;
//       }
//       else{
//         let splitWord = e.split('');
//         splitWord[0] = splitWord[0].toUpperCase();
//         return splitWord.join('')
//       }
//     }).join('')
//   }

function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
  }
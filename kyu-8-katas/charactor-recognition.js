// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
    let strArray = string.split('')
    for(let i = 0; i < strArray.length; i++){
      if(strArray[i] == '0'){
        strArray[i] = 'O'
      }
      if(strArray[i] == '5'){
        strArray[i] = 'S'
      }
      if(strArray[i] == '1'){
        strArray[i] = 'I'
      }
    }
    return strArray.join('')
  }
    

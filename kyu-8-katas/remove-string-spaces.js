// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    while(x.includes(' ')){
      x = x.replace(' ', '')
    }
    return x
  }
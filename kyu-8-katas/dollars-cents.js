// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

function formatMoney(amount){
    return `$${amount.toFixed(2)}`;
  }
  
    // Parameters
    // What is the type of argument being inputted and are there multiple or default arguments?
    //a number or float  
    
    // Return
    // What is being asked to be returned and what is the type?
    //return the parameter as a string starting with $ and with exactly two decimal places, even if they are zero
    
    // Example
    // Provide 2-3 examples of what we expect to happen if we call the function with certain 
    // arguments. Can you think of any edge cases?
    //3 -> '$3.00'
    //3.1 -> '$3.10'
    //3.45 -> '$3.45'
    //input will be sanitized before entering function, only nums
    
    // Pseudocode
    // Write informal steps on how to solve the problem. Think about what the parameters are and 
    // what steps need to be taken to get to our expected return. All statements showing "dependency" 
    // are to be indented.
    //take a the parameter, place it in a string that starts with $, and add or remove decimal places 
    //to get to exactly two decimal places
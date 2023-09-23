//Use the parseInt Function

//the parseInt() function parses a string and returns an integer.


function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56"); 


//Use the parseInt Function w a Radix

/* Use paserInt() in the convertToInteger function so it converts a binary number 
to an integer and returns it. */

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");


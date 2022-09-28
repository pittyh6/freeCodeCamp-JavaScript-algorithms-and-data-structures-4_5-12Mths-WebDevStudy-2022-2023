/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/g; // Change this line
let result = pwRegex.test(sampleWord);
/*
    Find the Longest Word in a String
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

function findLongestWordLength(str) {
    let division = str.split(" ")
    let longest = division[0] 
    for(let i = 1; i < division.length; i++){
        if(longest.length < division[i].length){
            longest = division[i]
        }
    }
    console.log("result: " + longest)
    return longest.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

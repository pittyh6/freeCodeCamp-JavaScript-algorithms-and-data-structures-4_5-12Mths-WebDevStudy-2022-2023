/*
    Find the Longest Word in a String
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

function findLongestWordLength(str) {
    console.log(str.split(" "))
    let test = str.split(" ")
    for(let i = 0; i < test.length; i++) {
        console.log(test[i])
        if(test[i] < test[i + 1]) {
            console.log("small: " + test[i] + " " + test[i + 1])
        }else{
            console.log("big: " + test[i + 1] + " " + test[i])
        }
    }
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
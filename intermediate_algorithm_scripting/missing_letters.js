/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    const abcLetters = 'abcdefghijklmnopqrstuvwxyz'
    const strFirstLetter = str.charAt(0)
    let strIndex = abcLetters.indexOf(strFirstLetter)
    let missingLetter = ''
    let endString = strIndex+str.length
    //let last = str.length
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(str.length-1) == abcLetters[endString-1]){
            console.log("undefined")
            return undefined
        }else if(str.charAt(i) == abcLetters[strIndex]){
            strIndex ++
        }else if(str.charAt(i) !== abcLetters[strIndex]){
            missingLetter = abcLetters[strIndex]
            console.log(missingLetter)
            str = str + missingLetter
            str = str.split("").sort().join("")
            console.log(str)
            return missingLetter
        }
    }

}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")




/*
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}


function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}



function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
*/
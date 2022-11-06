/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


*/
function translatePigLatin(str) {
    let myRegex = /[aeiou]/gi
    let firstLetter
    if (str.charAt(0).match(myRegex)) {
        str += "way"
    } else if (str.match(myRegex) === null) {
        str += "ay"
    } else {
        let vowelIndice = str.indexOf(str.match(myRegex)[0])
        console.log(vowelIndice)
        str = str.substring(vowelIndice) + str.substring(0, vowelIndice) + "ay"
    }
    console.log(str)
    return str
}



translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("algorithm")
translatePigLatin("rhythm")
translatePigLatin("schwartz")


/*
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}




function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}



function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
*/
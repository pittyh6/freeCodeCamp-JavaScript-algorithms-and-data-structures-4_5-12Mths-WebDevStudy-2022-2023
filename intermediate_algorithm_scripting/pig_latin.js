/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


*/
function translatePigLatin(str) {

    let firstLetter
    if(str.charAt(0)== 'a' || str.charAt(0)== 'e' || str.charAt(0)== 'i' || str.charAt(0)== 'o' || str.charAt(0)== 'u'){
        str += "way"
    }else{
        firstLetter = str.slice(0,1)
        str = str.slice(1, str.length)+firstLetter + "ay"
    }
    console.log(str)
    return str;
}

translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("algorithm")
translatePigLatin("rhythm")
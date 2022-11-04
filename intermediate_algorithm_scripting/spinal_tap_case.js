/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
    console.log(str.split(/(?=[A-Z])/).join("-").split(/[_\s]/).join("").toLowerCase()); 
    return str.split(" ").join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")

/*
1) 
*/
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    let s = str.split("").length;
    let t = target.split("").length;
    console.log(t)
    if(str.substring(s-t,s) == target){
        console.log("ok : " + target + " " + str.substring(s-t,s))
        return true
    }else{
        console.log("not equal")
        return false
    }
    return str;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")
confirmEnding("Connor", "n")
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
confirmEnding("He has to give me a new name", "name")

/*
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");


function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
console.log(confirmEnding("Bastian", "n"));


function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
confirmEnding("Bastian", "n");
*/
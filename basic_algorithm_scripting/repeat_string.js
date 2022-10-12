/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    let rep = str;
    if(num <= 0){
        return ""
    }else{
        for(let i = 1; i < num; i++){
            rep += str
        }
    }
    console.log(rep)
    return rep;   
}
repeatStringNumTimes("abc", 3);


/*
function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";
  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }
  return accumulatedStr;
}

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
*/
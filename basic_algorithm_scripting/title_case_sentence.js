/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


function titleCase(str) {
    str = str.toLowerCase();
    const arr = str.split(" ");
    let firstUp;
    for(let i = 0; i < arr.length; i++) {
        arr[i]= (arr[i].slice(0,1).toUpperCase() + (arr[i].slice(1)))
    }
    return firstUp = arr.join(" ");
}

titleCase("I'm a little tea pot")
titleCase("sHoRt AnD sToUt") 
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")



/*
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
*/
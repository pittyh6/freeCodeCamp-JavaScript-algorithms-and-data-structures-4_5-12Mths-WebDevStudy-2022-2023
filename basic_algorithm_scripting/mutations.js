/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/


function mutation(arr) {
    let n_arr_zero = arr[0].toLowerCase();
    let n_arr_one = arr[1].toLowerCase();
    for (let i = 0; i < n_arr_one.length; i++) {
        if (n_arr_zero.indexOf(n_arr_one[i]) < 0) {
            console.log(" false")
            return false
        }
    }
    console.log(" true")
    return true

}

mutation(["hello", "hey"])// should return false.
mutation(["hello", "Hello"])// should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
mutation(["Mary", "Army"])// should return true.
mutation(["Mary", "Aarmy"]) //should return true.
mutation(["Alien", "line"]) //should return true.
mutation(["floor", "for"]) //should return true.
mutation(["hello", "neo"]) //should return false.
mutation(["voodoo", "no"]) //should return false.
mutation(["ate", "date"])// should return false.
mutation(["Tiger", "Zebra"]) //should return false.
mutation(["Noel", "Ole"]) //should return true.



/*
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}


function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

*/
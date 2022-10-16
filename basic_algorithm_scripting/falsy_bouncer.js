/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/


function bouncer(arr) {
    let new_arr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]){
            new_arr.push(arr[i]) //We use the if statement to check if the current element is truthy 2.8k or falsy 4.5k
        }
    }
    console.log(new_arr)
    return new_arr;
}

bouncer([7, "ate", "",false, 9]); //[7, "ate", 9].
bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""])// should return []
/*
function bouncer(arr) {
  return arr.filter(Boolean);
}
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 2.8k value or false for falsy 4.5k value. Hence we pass the built-in Boolean function.

*/
/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let secArr = [...arr2]
    let restArr = secArr.splice(n);
    let result = secArr;
    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    restArr.map(x => result.push(x))
    console.log(result)
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1) //[4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) //should return ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].



/*
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}


function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}


function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
*/
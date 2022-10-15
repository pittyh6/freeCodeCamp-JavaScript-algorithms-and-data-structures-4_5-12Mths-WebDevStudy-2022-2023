/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let result = arr1;
    //n_new = arr2[n - 1]
    let n_new = arr2.splice(n-1,n)
    let n_rest = arr2.splice(n-1, arr2.length)

    result.unshift(n_new);
    result.push(n_rest)
    console.log("final: " + result)
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1) //[4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) //should return ["a", 1, 2, "b"]
Failed:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
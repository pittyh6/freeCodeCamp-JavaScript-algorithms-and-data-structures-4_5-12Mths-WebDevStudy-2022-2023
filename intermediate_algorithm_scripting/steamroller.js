/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    const flattedArr = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattedArr.push(...steamrollArray(arr[i]))
        }else{
            flattedArr.push(arr[i])
        }
    }
    console.log(flattedArr)
    return flattedArr
}

steamrollArray([1, [2], [3, [[4]]]]);
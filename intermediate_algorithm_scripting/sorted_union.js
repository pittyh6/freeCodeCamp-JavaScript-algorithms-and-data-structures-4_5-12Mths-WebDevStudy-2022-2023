/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
    let newArr = []

    for (let i = 0; i < arguments.length; i++) {
        arguments[i].filter(elem => {
            if (!newArr.includes(elem)) {
                newArr.push(elem)
            } 
        })
    }
    console.log(newArr)
    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 3, 2], [5, 4], [5, 6])
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])



/*
function uniteUnique(arr1, arr2, arr3) {
  const finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}




function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);





function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];



function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/
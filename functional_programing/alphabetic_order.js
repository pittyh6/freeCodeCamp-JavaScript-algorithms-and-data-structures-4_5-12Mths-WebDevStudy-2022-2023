/*
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. 
The function should return the sorted array.
*/
function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
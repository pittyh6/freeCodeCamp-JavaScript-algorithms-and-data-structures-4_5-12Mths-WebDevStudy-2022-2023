/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/


function addTogether() {
    if (isNaN(arguments[0]) == false && isNaN(arguments[1]) == false && 
                typeof arguments[0] !== 'string' && typeof arguments[1] !== 'string') {
        if (arguments.length = 2) {
            let sum = arguments[0] + arguments[1]
            console.log(sum)
            return sum
        } 
    }else if (isNaN(arguments[0]) !== false) {
        console.log("undefined")
        return undefined
    }


    return false;
}

addTogether(2, 3);
addTogether(5)(7)
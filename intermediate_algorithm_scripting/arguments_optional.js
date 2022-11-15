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
    let firstArgument = arguments[0];
    let sum = 0
    if (arguments.length > 1) {
        let secondArgument = arguments[1];
        return checkArgumentsAndAddIfValid(firstArgument, secondArgument)
    } else if (arguments.length == 1) {
        if (argumentCheck(firstArgument) == undefined) {
            return undefined
        } else {
            return function (secondArgument) {
                return checkArgumentsAndAddIfValid(firstArgument, secondArgument)
            }
        }
    }

}

function argumentCheck(argument) {
    if (typeof argument === 'number') {
        return argument
    } else {
        return undefined;
    }
}

function checkArgumentsAndAddIfValid(first, second) {
    if (argumentCheck(first) != undefined && argumentCheck(second) != undefined) {
        sum = first + second
        console.log(sum)
        return sum
    } else {
        console.log("undefined")
        return undefined
    }
}


addTogether(2, 3);
//addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
addTogether(23, 30)
//addTogether(2, "3")
//addTogether("2", 3)
//addTogether(5, undefined)
addTogether(5)(7)
//addTogether(2)([3])





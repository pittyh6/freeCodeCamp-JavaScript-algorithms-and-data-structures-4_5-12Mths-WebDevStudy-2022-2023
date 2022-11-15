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
   
    if (arguments.length > 1) {
        if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
            let sum = arguments[0] + arguments[1]
            console.log(sum)
            return sum
        } else if (typeof arguments[0] !== 'number' && typeof arguments[1] !== 'number') {
            argumentCheck(arguments)
        }
    } else if (arguments.length = 1) {
        if (typeof arguments[0] !== 'number') {
            argumentCheck(arguments)
        }
    }

}

function argumentCheck(argument){
    if(typeof argument === 'number'){
        return argument
    }else{
        return undefined;
    }
}


addTogether(2, 3);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
//addTogether(5)(7)





/*
if (isNaN(typeof arguments[0] == 'number' && typeof arguments[1] == 'number') ){
        if (arguments.length = 2) {
            let sum = arguments[0] + arguments[1]
            console.log(sum)
            //return sum
        } else if(arguments.length = 1){
            console.log("only one")
        }
    }else if (isNaN(arguments[0]) !== false || isNaN(arguments[1] !== false)) {
        console.log("undefined")
        return undefined
    }



    console.log(arguments.length);
    const first = arguments[0];
    console.log(first)
    if (arguments.length = 2) {
        if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
            let sum = arguments[0] + arguments[1]
            console.log(sum)
            //return sum
        } else if (isNaN(arguments[0]) !== false || isNaN(arguments[1] !== false)) {
            console.log("undefined")
            return undefined
        }
    } else if (arguments.length = 1) {
        
    }




function addTogether() {
   
    if (arguments.length > 1) {
        if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
            let sum = arguments[0] + arguments[1]
            console.log(sum)
            return sum
        } else if (typeof arguments[0] !== 'number' && typeof arguments[1] !== 'number') {
            argumentCheck(arguments)
        }
    } else if (arguments.length = 1) {
        if (typeof arguments[0] !== 'number') {
            argumentCheck(arguments)
        }
    }

}

function argumentCheck(argument){
    if(typeof argument === 'number'){
        return argument
    }else{
        return undefined;
    }
}


*/
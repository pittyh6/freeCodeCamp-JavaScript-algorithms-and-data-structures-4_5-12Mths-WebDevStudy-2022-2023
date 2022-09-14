/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number represented by the startNum parameter and
ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and 
endNum are the same.
*/

let arrRange = [];
function rangeOfNumbers(startNum, endNum) {
    if(startNum <= endNum){
        arrRange.push(startNum);
        console.log("arrRange: " + arrRange)
        const arrNumbers = startNum + 1;
        console.log("after array: " + arrNumbers)
        rangeOfNumbers(arrNumbers,endNum);
        console.log("arrRange end: " + arrRange);
        return arrRange;
    }else{
        return [];
    }
    
};

rangeOfNumbers(1, 5);
//rangeOfNumbers(5, 5);
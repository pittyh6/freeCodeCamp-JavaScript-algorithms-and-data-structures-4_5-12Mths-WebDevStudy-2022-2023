/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
 The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
    let sum = 1
    let firstN = 1
    let secondN = 1
    let extra = 0
    if (num >= 0) {
        for (let i = 1;  secondN <= num; i++) {
            if ((secondN % 2) != 0) {
                sum += secondN 
            }
            extra = secondN
            secondN = firstN + secondN
            firstN = extra
        }
    } else {
        console.log("insert a possitive number")
    }
    console.log("fibonacci result: " + firstN)
    console.log("SUM= " + sum)

    return sum;

}

sumFibs(4);
sumFibs(1)// should return a number.
sumFibs(1000) //should return 1785.
sumFibs(4000000)// should return 4613732.
sumFibs(4) //should return 5.
sumFibs(75024) //should return 60696.
sumFibs(75025) //should return 135721.





/*
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}




function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}






function sumFibs(num) {
  // Every third Fibbonaci number is even
  //   and the rest are odd
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  // Generate triples until num is reached
  let sum = 0;
  while (f1 <= num) {
    // Update sum
    sum += f1;
    if (f2 <= num) sum += f2;

    // Compute next three Fibonacci numbers
    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }

  return sum;
}
*/
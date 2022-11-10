/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/


function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (i > 1 && i <= 3) {
            console.log("Prime: " + i)
            sum += i
        } else if (i % 2 == 0) {
            //console.log("No prime numbers: " + i)
        } else if (i % 3 == 0) {
           // console.log("No prime numbers: " + i)
        } else if (i > 5 && i % 5 == 0) {
            //console.log("No prime numbers: " + i)
        } else if (i > 7 && i % 7 == 0) {
            //console.log("No prime numbers: " + i)
        }else if(i % 9 == 0){
            //console.log("No prime numbers: " + i)
        } else if (i > 11 && i % 11 == 0) {
            //console.log("No prime numbers: " + i)
        } else {
            console.log("Else - Prime: " + i)
            sum += i
        }
    }
    console.log("sum: " + sum)
    return sum;
}

sumPrimes(10);
sumPrimes(977)
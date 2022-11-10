/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/


function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0)
            return false;
        }
        return true;
      }
    
      // Check all numbers for primality
      let sum = 0;
      for (let i = 2; i <= num; i++) {
        if (isPrime(i))
          sum += i;
      }
      console.log(sum);
      return sum;
}

sumPrimes(10);
sumPrimes(977)



/*
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
*/



/*
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}






function sumPrimes(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}






function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
*/
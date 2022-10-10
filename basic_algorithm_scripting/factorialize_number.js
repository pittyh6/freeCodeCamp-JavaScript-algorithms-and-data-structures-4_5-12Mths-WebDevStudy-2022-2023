/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, 
a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/


function factorialize(num) {
    let result = 1;
    let count = num
    if (num == 0) {
        result = 1;
    } else {
        for (let i = 0; i < count; i++) {
            result = result * (num)
            num--
        }
    }
    console.log(result)
    return result;
}

factorialize(0);
factorialize(5);
factorialize(10);
factorialize(20);

/*
function factorializeT(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    console.log(product)
    return product;
  }
  
  factorializeT(0);
*/
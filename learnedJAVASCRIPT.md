# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](/Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### JS 
* JavaScript (JS)
    * Comments
        * // in-line comment
        * /* */ multi-line comment
    * Declare JavaScript Variables
        * JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
        * Variables allow computers to store and manipulate data in a dynamic fashion. Any of the eight data types may be stored in a variable.
        * Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
    * Storing Values with the Assignment Operator
        *  var variableName = value;
    * Declare String Variables
        * var myName = "your name";
    * Understanding Uninitialized Variables
        * When JavaScript variables are declared, they have an initial value of undefined. 
            * If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
            * If you concatenate a string with an undefined variable, you will get a string of undefined.
    * Understanding Case Sensitivity in Variables
        * In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
        * Best Practice
            * Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
    
    * Explore Differences Between the var and let Keywords
        * One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations.
        * A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword.
    * Declare a Read-Only Variable with the const Keyword
        * In ES6, you can also declare variables using the const keyword.
        * const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

    * add One Number to Another with JavaScript
        * var n = 5 + 10;
    * Subtract One Number from Another with JavaScript
        * const myVar = 12 - 6;
    * Multiply Two Numbers with JavaScript
        * const myVar = 13 * 13;
    * Divide One Number by Another with JavaScript
        * const myVar = 16 / 2;

    * Increment a Number with JavaScript
        * i++;
        * i = i + 1;
        * ++i;
    * Decrement a Number with JavaScript
        * i--;
        * i = i - 1;

    * Create Decimal Numbers with JavaScript
        *  Decimal numbers are sometimes referred to as floating point numbers or floats.
        *  myDecimal = 7.5;
    * Multiply Two Decimals with JavaScript
        * const product = 2.0 * 2.5;
    * Divide One Decimal by Another with JavaScript
        * const quotient = 4.4 / 2.0; 
    * Finding a Remainder in JavaScript
        * The remainder operator % gives the remainder of the division of two numbers.
        * 5 % 2 = 1 because
            Math.floor(5 / 2) = 2 (Quotient)
            2 * 2 = 4
            5 - 4 = 1 (Remainder)
        * const remainder = 11%3;
    * Compound Assignment With Augmented Addition
        * In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
            * myVar = myVar + 5;
        * One such operator is the += operator.
            * myVar += 5;
    * Compound Assignment With Augmented Subtraction
        * Like the += operator, -= subtracts a number from a variable
            * myVar -= 5;
    * Compound Assignment With Augmented Multiplication
        * The *= operator multiplies a variable by a number.
            * myVar *= 5; => myVar = myVar * 5;
    * Compound Assignment With Augmented Division
        * The /= operator divides a variable by another number.
            * myVar /= 5; => myVar = myVar / 5;
    
    * Escaping Literal Quotes in Strings
        * When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?
            * In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
                * const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
        * Quoting Strings with Single Quotes
            * String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.
                * const conversation = 'Finn exclaims to Jake, "Algebraic!"';
                * const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
    * Escape Sequences in Strings
        * Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:
            * To allow you to use characters you may not otherwise be able to type out, such as a carriage return.       
            * To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
                Code	Output
                \'	single quote
                \"	double quote
                \\	backslash
                \n	newline
                \r	carriage return
                \t	tab
                \b	word boundary
                \f	form feed
            * const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

    * Concatenating Strings with Plus Operator
        * In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.
            * 'My name is Alan,' + ' I concatenate.'
    * Concatenating Strings with the Plus Equals Operator
        * We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.
            * let ourStr = "I come first. ";
                ourStr += "I come second.";
    * Constructing Strings with Variables
        * Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.
            * const ourName = "freeCodeCamp";
                const ourStr = "Hello, our name is " + ourName + ", how are you?";

    * Appending Variables to Strings
        * Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.
            * const anAdjective = "awesome!";
                let ourStr = "freeCodeCamp is ";
                ourStr += anAdjective;
    * Find the Length of a String
        * You can find the length of a String value by writing .length after the string variable or string literal.
            * console.log("Alan Peter".length);
    * Use Bracket Notation to Find the First Character in a String
        * Bracket notation is a way to get a character at a specific index within a string.
        * Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing
            * const firstName = "Charles";
                const firstLetter = firstName[0];
    * Understand String Immutability
        * In JavaScript, String values are immutable, which means that they cannot be altered once created.
            * let myStr = "Bob";
            myStr[0] = "J";
            - cannot change the value of myStr to Job, because the contents of myStr cannot be altered.
            - The only way to change myStr would be to assign it with a new string
            let myStr = "Bob";
            myStr = "Job";
    * Use Bracket Notation to Find the Nth Character in a String
        * secondLetterName = myName[1]
    * Use Bracket Notation to Find the Last Character in a String
        * In order to get the last letter of a string, you can subtract one from the string's length.
            * const lastLetter = firstName[firstName.length - 1];
    * Use Bracket Notation to Find the Nth-to-Last Character in a String
        * const firstName = "Augusta" 
         firstName[firstName.length - 3]
    * Word Blanks - challenge
    
    # Array
    * Store Multiple Values in one Variable using JavaScript Arrays
        * With JavaScript array variables, we can store several pieces of data in one place.
        * You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
            * const sandwich = ["peanut butter", "jelly", "bread"];
    * Nest one Array within Another Array
        * You can also nest arrays within other arrays, like below:
            * const teams = [["Bulls", 23], ["White Sox", 45]];
    * Access Array Data with Indexes
        * Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0  
            * const array = [50, 60, 70];
                console.log(array[0]);
                const data = array[1];
    * Modify Array Data With Indexes
        * Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
            * const ourArray = [50, 40, 30];
                ourArray[0] = 15;  -> [15, 40, 30]
    * Access Multi-Dimensional Arrays With Indexes
        * One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
            const arr = [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
              [[10, 11, 12], 13, 14]
            ];
            const subarray = arr[3];
            const nestedSubarray = arr[3][0];
            const element = arr[3][0][1];
    # pop() and push() and shift()
    * Manipulate Arrays With push()
        * An easy way to append data to the end of an array is via the push() function.
        * .push() takes one or more parameters and "pushes" them onto the end of the array.
           const arr1 = [1, 2, 3];
            arr1.push(4);
            const arr2 = ["Stimpson", "J", "cat"];
            arr2.push(["happy", "joy"]); 
    * Manipulate Arrays With pop()
        * .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
            * myArray = [1,2,3];
                car = myArray.pop(); -> that means car = 3
    * Manipulate Arrays With shift()
        * That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
            * const ourArray = ["Stimpson", "J", ["cat"]];
                const removedFromOurArray = ourArray.shift();
    * Manipulate Arrays With unshift()
        * .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
            * const ourArray = ["Stimpson", "J", "cat"];
                ourArray.shift();
                ourArray.unshift("Happy");

    # Functions
    * Write Reusable JavaScript with Functions
        * In JavaScript, we can divide up our code into reusable parts called functions.
            * function functionName() {console.log("Hello World"); }
            * You can call or invoke this function by using its name followed by parentheses, like this: functionName();
                * function functionName() { console.log("Hello World"); }
    * Passing Values to Functions with Arguments
        * Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
            * function testFun(param1, param2) {console.log(param1, param2); }
    * Return a Value from a Function with Return
        * We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
            * function plusThree(num) {  return num + 3;}
                const answer = plusThree(5);

    * Global Scope and Functions
        * In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
        * Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
    * Local Scope and Functions
        * Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
            * function myTest() {
              const loc = "foo";
              console.log(loc);
            }
    * Global vs. Local Scope in Functions
        * It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
            * const someVar = "Hat";
                function myFun() {
                  const someVar = "Head";
                  return someVar;
                }
    * Understanding Undefined Value returned from a Function
        * A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
            * let sum = 0;
               function addSum(num) {  sum = sum + num;}
               addSum(3);
    * Assignment with a Returned Value
        * If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variabl
        * Assume we have pre-defined a function sum which adds two numbers together, then:
            ourSum = sum(5, 12);   
            * will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.
    * Stand in Line
        * In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
    
    * Understanding Boolean Values
        * Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.
        * Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
    
    # if and else
    * Use Conditional Logic with If Statements
        * if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
        * When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
            * if (condition is true) { statement is executed }
    * Comparison with the Equality Operator
        * ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
            * if (myVal == 10) { return "Equal"; }
    * Comparison with the Strict Equality Operator
        * If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
            * 3 ===  3  // true
            * 3 === '3' // false
    * Comparison with the Inequality Operator
        * The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
            * 1 !=  2    // true
            * 1 != "1"   // false
            * 1 != '1'   // false
            * 1 != true  // false
            * 0 != false // false
    * Comparison with the Strict Inequality Operator
        * The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.
            * 3 !==  3  // false
            * 3 !== '3' // true
            * 4 !==  3  // true
    * Comparison with the Greater Than Operator
        * The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false
        * Like the equality operator, the greater than operator will convert data types of values while comparing.
            * 5   >  3  // true
            * 7   > '3' // true
            * 2   >  3  // false
            * '1' >  9  // false
    * Comparison with the Greater Than Or Equal To Operator
        * The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
        * Like the equality operator, the greater than or equal to operator will convert data types while comparing.
            * 6   >=  6  // true
            * 7   >= '3' // true
            * 2   >=  3  // false
            * '7' >=  9  // false
    * Comparison with the Less Than Operator
        * The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.
            * 2   < 5 // true
            * '3' < 7 // true
            * 5   < 5 // false
            * 3   < 2 // false
            * '8' < 4 // false
    * Comparison with the Less Than Or Equal To Operator
        * The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.
            * 4   <= 5 // true
            * '7' <= 7 // true
            * 5   <= 5 // true
            * 3   <= 2 // false
            * '8' <= 4 // false
    * Comparisons with the Logical And Operator





![End Banner](/Documentation/botton-1200x350.gif)
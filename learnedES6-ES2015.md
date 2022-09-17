# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### JavaScript ES6 / ES2015
* ES6
    * Compare Scopes of the var and let Keywords
        * When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
        * The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
        * Variable declarations as global (var i = 0;). This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.
    
    #MUTATE ARRAY AND OBJECT
    * Mutate an Array Declared with const
        * The const declaration has many use cases in modern JavaScript.
        * Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
        * However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
    * Prevent Object Mutation
        * As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
        * Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
            * let obj = {
                name:"FreeCodeCamp",
                review:"Awesome"
              };
              Object.freeze(obj);
              obj.review = "bad";
              obj.newProp = "Test";
              console.log(obj);
                * The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

    # ARROW FUNCTION
    * Use Arrow Functions to Write Concise Anonymous Functions
        * In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
            * const myFunc = function() {
                const myVar = "value";
                return myVar;
            }
        * ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
            * const myFunc = () => {
              const myVar = "value";
              return myVar;
            }
        * When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
            * const myFunc = () => "value";
                * const magic = () => new Date();
    * Write Arrow Functions with Parameters
        
        

![End Banner](Documentation/botton-1200x350.gif)
# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](/Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### Basic Data Structure

# Array
* Use an Array to Store a Collection of Data
    * The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:
    * let simpleArray = ['one', 2, 'three', true, false, undefined, null];
      console.log(simpleArray.length);
      The console.log call displays 7.
    * All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
        * let complexArray = [
        [
            {
            one: 1,
            two: 2
            },
            {
            three: 3,
            four: 4
            }
        ],
        [
            {
            a: "a",
            b: "b"
            },
            {
            c: "c",
            d: "d"
            }
        ]
        ];
# array[...]
* Access an Array's Contents Using Bracket Notation
    * let ourArray = ["a", "b", "c"];
    * In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:
        * let ourVariable = ourArray[0];
    * In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:
        * ourArray[1] = "not b anymore";

# ADD array PUSH() and UNSHIFT()
* Add Items to an Array with push() and unshift()
    * modify an array: Array.push() and Array.unshift().
        * Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.
            * let twentyThree = 'XXIII';
              let romanNumerals = ['XXI', 'XXII'];
              romanNumerals.unshift('XIX', 'XX');
                romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].
              romanNumerals.push(twentyThree);
                romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
# REMOVE  array POP() and SHIFT()
* Remove Items from an Array with pop() and shift()
    * pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
        * let greetings = ['whats up?', 'hello', 'see ya!'];
          greetings.pop();
            greetings would have the value ['whats up?', 'hello'].
          greetings.shift();
            greetings would have the value ['hello'].
    * We can also return the value of the removed element with either method like this:
        * let popped = greetings.pop();
            * greetings would have the value [], and popped would have the value hello.
# SPLICE()
* Remove Items Using splice()
    * Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
    * splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:
    * let array = ['today', 'was', 'not', 'so', 'great'];
      array.splice(2, 2);
      Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].
        * splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:
            * let array = ['I', 'am', 'feeling', 'really', 'happy'];
              let newArray = array.splice(3, 2);
                * newArray has the value ['really', 'happy'].
* Add Items Using splice()
    * const numbers = [10, 11, 12, 12, 15];
      const startIndex = 3;
      const amountToDelete = 1;
      numbers.splice(startIndex, amountToDelete, 13, 14);
      console.log(numbers);
        * The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].
            * Here, we begin with an array of numbers. Then, we pass the following to splice(): The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index. Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

# SLICE()
* Copy Array Items Using slice()
    * The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:
        * let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
          let todaysWeather = weatherConditions.slice(1, 3);
            * todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].
                * In effect, we have created a new array by extracting elements from an existing array.

# SPREAD operator ...
* Copy an Array with the Spread Operator
    * While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
    * In practice, we can use the spread operator to copy an array like so:
        * let thisArray = [true, true, undefined, false, null];
          let thatArray = [...thisArray];
            * thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.
* Combine Arrays with the Spread Operator
    * Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:
        * let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
          let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
          thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
            * Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

# indexOf()
* Check For The Presence of an Element With indexOf()
    * Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
        * let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
          fruits.indexOf('dates');
          fruits.indexOf('oranges');
          fruits.indexOf('pears');
            * indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first   index at which each element exists).
# Loops
* Iterate Through All an Array's Items Using For Loops
    * Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.
        * function greaterThanTen(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] > 10) {
                newArr.push(arr[i]);
              }
            }
            return newArr;
          }
          greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
        * Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items.
# MULTI-DIMENSIONAL ARRAYS
* Create complex multi-dimensional arrays
    * One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become a very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:
        * let nestedArray = [
            ['deep'],
            [
              ['deeper'], ['deeper'] 
            ],
            [
              [
                ['deepest'], ['deepest']
              ],
              [
                [
                  ['deepest-est?']
                ]
              ]
            ]
          ];
            * The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.
                * While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:  
                    * console.log(nestedArray[2][1][0][0][0]);
# OBJECT    
* Add Key-Value Pairs to JavaScript Objects
  * At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:
* const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
  * The above code defines a Tekken video game character object called tekkenCharacter. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:
    * tekkenCharacter.origin = 'South Korea';
      * This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:
        * tekkenCharacter['hair color'] = 'dyed orange';
      * Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:
        * const eyes = 'eye color';
          tekkenCharacter[eyes] = 'brown';
        * After adding all the examples, the object will look like this:
          * {
            player: 'Hwoarang',
            fightingStyle: 'Tae Kwon Doe',
            human: true,
            origin: 'South Korea',
            'hair color': 'dyed orange',
            'eye color': 'brown'
          };



![End Banner](/Documentation/botton-1200x350.gif)
/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
*/

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let first
    let last

    this.getFullName = function () {
        return firstAndLast;
    };

    this.getFirstName = function () {
        splitNames(firstAndLast)
        return first[0]
    };
    this.getLastName = function () {
        splitNames(firstAndLast)
        return last[1]
    };

    function splitNames(firstAndLast){
        let names = firstAndLast.split(" ")
        first = names[0]
        last = names[1]
        return first,last

    }
    return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
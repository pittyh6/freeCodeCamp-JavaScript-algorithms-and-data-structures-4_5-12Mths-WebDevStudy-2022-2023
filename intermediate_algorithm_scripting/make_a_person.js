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
    
    this.getFullName = function () {
        return firstAndLast;
    };
    
    this.getFirstName = function () {
        return firstAndLast.split(" ")[0]
    };
    this.getLastName = function () {
        return firstAndLast.split(" ")[1]
    };
    
    this.setFullName = function (newFullName){
        return firstAndLast = newFullName
    }
    
    this.setFirstName = function(newFirstName) {
        return firstAndLast = newFirstName + " " + this.getLastName()
    }

    this.setLastName = function(newLastName){
        return firstAndLast = this.getFirstName() + " " + newLastName
    }
};

const bob = new Person('Bob Ross');


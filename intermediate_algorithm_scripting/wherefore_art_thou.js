/*
Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example,
if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    // console.log(collection)
    // console.log(source)

    let pName = Object.getOwnPropertyNames(source).toString()
    let pValue = Object.values(source)
    // console.log(Object.getOwnPropertyNames(source))
    // console.log(Object.values(source))

    // console.log(pValue)


    // console.log(Object.values(collection).indexOf(pValue)> -1)
    // console.log(collection.filter(elem => elem.hasOwn(pName)))
    console.log(collection.filter(elem => Object.hasOwn(elem, pName)))
    if(collection.filter(elem => Object.hasOwn(elem, pValue))){
        console.log("Entrou")
    }

    for(let i= 1; i<collection.length; i++) {
        //if(collection.filter(elem => collection.hasOwnProperty(pName)) && collection.filter(elem => collection.hasOwnProperty(pValue))){
        if(collection.filter(elem => collection.hasOwnProperty(pName)) && collection.filter(elem => Object.values(elem).indexOf(pValue)> -1)){
            console.log(pName)
            console.log("has property Name: " + pName)
            console.log("has property Value: " + pValue)
            arr.push(collection[i])
            console.log(arr)
        }
    }

    // if(collection.filter(elem => collection.hasOwnProperty(pName)) && collection.filter(elem => arr.hasOwnProperty(pValue))){
    //     console.log("has property Name: " + pName)
    //     console.log("has property Value: " + pValue)
    //     arr.push({pName: pValue})
    //     console.log(arr)
    // }
    
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulete" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
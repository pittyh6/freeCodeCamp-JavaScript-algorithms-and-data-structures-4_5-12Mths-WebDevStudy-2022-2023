/*
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found".
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    console.log(obj)
    if(obj.hasOwnProperty(checkProp)){
        console.log("has it " + obj[checkProp]);
        return obj[checkProp];
    }else{
        return "Not Found"
    }
    // Only change code above this line
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
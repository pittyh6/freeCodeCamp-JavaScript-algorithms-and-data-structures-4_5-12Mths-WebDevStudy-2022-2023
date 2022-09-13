/*
    We have an array of objects representing different people in our contacts lists.
    A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

    The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
    If both are true, then return the "value" of that property.
    If name does not correspond to any contacts then return the string No such contact.
    If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i= 0; i <= contacts.length-1; i++) {
        //The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
        //If both are true, then return the "value" of that property.
        if(name == contacts[i].firstName && contacts[i].hasOwnProperty(prop)){
            console.log("first name: " + contacts[i].firstName);
            console.log("Prop value: " + (contacts[i][prop]));
            return (contacts[i][prop]);
        }else if(name !== contacts[i].firstName){
            //If name does not correspond to any contacts then return the string No such contact.

            // while(name !== contacts[i].firstName){
            //     console.log("entrou while "+ contacts[i].firstName);
            //     if(name === contacts[i].firstName){
            //         console.log("name = firstName: " + contacts[i].firstName);
            //         return (contacts[i][prop]);
            //     }else{
            //         i++;
            //     }
            // }
            while(name !== contacts[i].firstName){
                i++;
            }
            console.log("saiu while "+ contacts[i].firstName);
            if(name === contacts[i].firstName){
                console.log("name = firstName: " + contacts[i].firstName);
                return (contacts[i][prop]);
            }else{
                console.log("No such contact");
                return "No such contact";
            }
            
        }else if(contacts[i].hasOwnProperty(prop) === false){
            // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
            console.log("property: " + contacts[i][prop]);
            while(contacts[i].hasOwnProperty(prop) == false){
                i++;
            }
            if(contacts[i].hasOwnProperty(prop) === true){
                console.log("property: " + contacts[i][prop]);
                return (contacts[i][prop]);
            }else{
                console.log("No such property");
                return "No such property";
            }
            //return "No such property";
        }
        console.log("final: ")
    }
    
    // Only change code above this line
  }
  
  //lookUpProfile("Akira", "likes");
  //lookUpProfile("Bob", "number");
  lookUpProfile("Akira", "address");
  //lookUpProfile("Kristian", "lastName");
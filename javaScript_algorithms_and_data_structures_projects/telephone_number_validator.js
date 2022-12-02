/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    let polishedPhone = str.replace(/-| /g , "")
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log(str.length)
    if(str.length == 10 ){
        return true
    }else if(str.length == 12 && str[3] == "-" && str[7] == "-"){
        console.log("else if(1): true")
        return true
    }else if(str.length == 13 && str[0] == "(" && str[4] == ")" && str[8] == "-"){
        console.log("else if(2): true")
        return true
    }else if(str.length == 14 && str[0] == 1 && str[1] == " " && str[5] == "-" && str[9] == "-" || 
             str.length == 14 && str[0] == 1 && str[1] == "(" && str[5] == ")" && str[9] == "-" ||
             str.length == 14 && str[0] == 1 && str[1] == " " && str[5] == " " && str[9] == " "){
        console.log("else if(3): true")
        return true
    }else if(str.length == 16 && str[0] == 1 && str[1] == " " && str[2] == "(" && str[6] == ")" && str[7] == " "&& str[11] == "-"){
        console.log("else if(4): true")
        return true
    }
    return false;
}

telephoneCheck("1 555 555 5555"); 
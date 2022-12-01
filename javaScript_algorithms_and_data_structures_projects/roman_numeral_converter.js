/*
Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let roman = ""
    for(let key in romanNumerals) {
        while(num >= romanNumerals[key]) {
            roman += key
            console.log("romanNumerals[key]: ", romanNumerals[key])
            num -= romanNumerals[key]
        }
    }
    console.log("roman: ", roman)
    return roman;
}

convertToRoman(30);
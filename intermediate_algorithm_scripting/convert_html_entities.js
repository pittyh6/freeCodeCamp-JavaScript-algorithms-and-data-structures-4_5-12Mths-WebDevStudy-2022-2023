/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    console.log(str.length)

    if (str.includes("&")) {
        str = str.replace("&", "&amp;")
    } else if (str.includes("<")) {
        str = str.replace("<", "&lt;")
    } else if (str.includes(">")) {
        str = str.replace(">", "&gt;")
    } else if (str.includes('"')) {
        str = str.replace('"', "&quot;")
    } else if (str.includes("'")) {
        str = str.replace("'", "&apos;")
    }


    console.log(str)
    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let newStr = str.split("")

    newStr.filter(elem => {
        if (elem == "&") {
            str = str.replace("&", "&amp;")
        } else if (str.includes("<")) {
            str = str.replace("<", "&lt;")
        } else if (str.includes(">")) {
            str = str.replace(">", "&gt;")
        } else if (str.includes('"')) {
            str = str.replace('"', "&quot;")
        } else if (str.includes("'")) {
            str = str.replace("'", "&apos;")
        } else {
        }
    })
    console.log(str)
    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("abc")


/*
function convertHTML(str) {
  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}




function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");




function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
*/
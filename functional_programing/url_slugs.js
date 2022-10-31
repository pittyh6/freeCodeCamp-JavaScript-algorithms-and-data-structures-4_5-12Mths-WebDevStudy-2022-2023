/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
*/

// Only change code below this line
function urlSlug(title) {
    //const newTitle = title.split(" ").join("-").toLowerCase();
    const newTitle = title.split(" ").filter(elem => elem != "");
    //const remove_empty = newTitle.filter(elem => elem != "")
    const concat_sentence = newTitle.join("-").toLowerCase();
    //const concat_sentence = remove_empty.join("-").toLowerCase();
    console.log(concat_sentence)
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug("Winter Is Coming")
urlSlug(" Winter Is  Coming")
urlSlug("Hold The Door")


/*
// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"





// Add your code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
*/
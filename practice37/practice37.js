// ## alternate caps
// - given a string, create a new string with every other letter capitalized
// - example:
// - parameters: "amazing"
// - return: "aMaZiNg"

//Strings in javascript are immutable. You cannot modify original string. You'll have to create a new one.
//Make odd number indexed values upper case, otherwise make them lowercase. Concatenate the new string.


function capitalize (string) {
    var newString = '';
    for (var i = 0; i < string.length; i = i + 1) {
       if (i % 2 === 1) {
           newString = newString + string[i].toUpperCase();
       } else {
           newString = newString + string[i].toLowerCase();
       }
    }
    return newString;
}

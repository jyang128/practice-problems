// Build a function, find_middle_letters, that finds the middle of a string.  If the string is an odd number of characters, it returns 1 letter.  If it is an even number of characters, it returns 2 characters.  It takes a string as a parameter
//

// - Example:
// - find_middle_letters('seven')
// - Return: 'v'
// - find_middle_letters('dish')
// - Return: 'is'

//Modulus (%) returns the remainder ... 10 % 2 returns 0, 11 % 2 returns 1, so we can identify even and odd numbers, respectively
//Remeember: Arrays start at index 0

function find_middle_letters(string) {
    if(string.length % 2 === 1) {
        var middleOfOdd = Math.floor(string.length/2);
        return string[middleOfOdd];
    } else {
        var middleOfEven1 = string.length/2;
        var middleOfEven2 = string.length/2 -1;
        return string[middleOfEven2] + ' and ' + string[middleOfEven1];
    }
}
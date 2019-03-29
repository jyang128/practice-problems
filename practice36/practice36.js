// ## Find the vowels
//
// - given a string, find all the vowels in the string.  Store them in a new string
// - example:
// - parameters: "four score and seven years ago"
// - return: "ouoeaeeeaao"

function findVowels(string){
    var vowels = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
            vowels = vowels + string[i];
        }
    }
    return vowels;
}

// ### human-level instructions
// - create variable to store vowels
// - begin loop
// - get each letter, one at a time
// - compare it with each each vowel and see if it matches
// - if it is, add it to the vowel variable
// - repeat



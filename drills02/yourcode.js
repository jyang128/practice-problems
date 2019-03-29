// - countOccurences:
// - given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
// - input ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
// - returns 3

function countOccurences(array, word){
    var count = 0;
    for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        if (array[arrayIndex] === word){
            count++;
        }
    }
    return count;
}

// - wordLengths:
// - given an array of words, return an array of numbers representing the length of each word For example:
//     - input ['canary','silly','dog','a','mellow'])
// - return [6,5,3,1,6]
function wordLengths(array){
    var numArray = [];
    for (var i =0; i< array.length; i++){
        var length = array[i].length;
        numArray.push(length);
    }
    return numArray;
}

// - getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
//     - input [3,1,9,12,4]
//     - return: {min: 1, max: 12, mean: 25.8}
function getMinMaxMean(array){
    var min = null;
    var max = null;
    var mean = null;
    var output = {
    };
    for (var i=0; i<array.length; i++){
        min = min + array[i];
    }



}

function findMode(){

}

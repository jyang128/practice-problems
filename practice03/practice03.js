// Build a function that sorts an array into a multidimensional array grouped by data type
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// - `groupArray(myArray);`
// - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

// Needed empty placeholder arrays within the empty array in order to use push method on each of them

function sortArray(array){
    var newArray = [[], [], []];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            newArray[0].push(array[i]);
        } else if (typeof array[i] === 'number') {
            newArray[1].push(array[i]);
        } else {
            newArray[2].push(array[i]);
        }
    }
    return newArray;
}
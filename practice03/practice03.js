// Build a function that sorts an array into a multidimensional array grouped by data type
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// - `groupArray(myArray);`
// - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

function sortArray(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            newArray.push(array[0][i]);
        } else if (typeof array[i] === 'number') {
            newArray.push(array[1][i]);
        } else {
            newArray.push(array[2][i]);
        }
    }
}
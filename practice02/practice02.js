// Build a function that takes in an array and reverses it
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output an array that is in reverse order from the input array
// - Example:
// - `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
// - `arrayReverse(myArray);`
// - Output - `['23', 'what', 'Bob', 45, 'hello']`
// - Avoid using pre-built functions that do something similar

// Arrays have the .push() method built in that allows you to add one or more values to an array
// Start with the value at the last index in the array and work backwards through index 0

function reverseArray(array){
    output = [];
    for (var i = array.length - 1; i >= 0; i-- ){
        output.push(array[i]);
    }
    return output;
}
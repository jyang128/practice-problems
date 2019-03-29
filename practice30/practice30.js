// Build a function, random_range, that takes 2 parameters, start_num and end_num.  OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

// - Example:
// - random_range(2,15)
// - returns 7
// - random_range(1,100)
// - returns 85
// - random_range(['a','b','c','d','e'])
// - returns 'b'

//Math.floor() will round a number downward to its nearest integer
//Math.random() will return a random number between 0 (inclusive) and 1 (exclusive)

// function getRandomNumber(low, high) {
//     var r = Math.floor(Math.random() * (high - low + 1)) + low);
//     return r;
// }
// Impossible to get 1 with Math.random(), and can get rounded down to 0
//          So we need to include + low  at the end so that we can even get the lower limit number
// The +1 with (high - low + 1) ensures you can also hit the upper limit
// Once you do that, you will be able to generate all numbers within the range of your high and low numbers, 10 and 50 respectively, with equal frequency.

function random_range(start_num, end_num) {
    return Math.floor(Math.random() * (end_num - start_num + 1) + start_num);
}

function random_array (array) {
    if (Array.isArray(array)) {
        var randomValue =  array[Math.floor(Math.random() * array.length)];
        return array[randomValue];
    } else {
        return 'Not an array';
    }
}
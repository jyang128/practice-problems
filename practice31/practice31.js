// Build a function, cocococombomath, that takes 5 numbers as parameters.
//     It:
// - multiplies the 1st number x the 2nd number
// - the result of that, it adds the 3rd number
// - the result of that, it divides by the 4th number
// - the result of that, it subtracts the 5th number
// - it returns that result
//
// - example:
// - cocococombomath(3,2,6,3,5)
// - Returns -1

function cocococombomath(num1, num2, num3, num4, num5) {
    var result1 = num1 * num2;
    var result2 = result1 + num3;
    var result3 = result2 / num4;
    var result4 = result3 - num5;
    return result4;
}
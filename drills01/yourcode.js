// - sumArray: given an array of numbers, add up all the numbers for
// 	- example: [1,5,3,2,6]
// - returns 17

function sumArray(arrayToSum){
	var sum = 0;
	for (var i = 0; i < arrayToSum.length; i++) {
	    sum = sum + arrayToSum[i];
    }
    return sum;
}
//given an array and a number, sum the array until you reach the number. keep adding any values that would total below the given value return an array of every number you could add For example:

function fitWithinVal(arrayToSum, num) {
	var sum = 0;
	var output = [];
	for (var i = 0; i < arrayToSum.length; i++) {
		if (sum + arrayToSum[i] <= num) {
			sum = sum + arrayToSum[i];
			output.push(arrayToSum[i]);
		}
	}
	return output;
}

// - getAllNamesShorterThan: Given an array of names and a value, return an array of only the names shorter than the given value for example:
// - input ['Clyde','Sue','Jerry','Jo'], 4
// - return ['Sue','Jo']

function getAllNamesShorterThan(arrayToSearch, num){
	var output = [];
	for (var i = 0; i < arrayToSearch.length; i++) {
		if ( arrayToSearch[i].length < num ) {
			output.push(arrayToSearch[i]);
		}
	}
	return output;
}

// - given an object with data for a person in it, generate a shipping label in the following form:
// 	- input:
// [
// 	{
// 		"familyName": "McGee",
// 		"givenName": "Chuckles",
// 		"greeting": "Miss.",
// 		"age": 28,
// 		"height": 165,
// 		"colors": {
// 			"eye": "green",
// 			"hair": "green"
// 		},
// 		"home address": {
// 			"streetNumber": "12345",
// 			"streetName": "Any St",
// 			"state": "Mo",
// 			"zip": 63102,
// 			"city": "Kansas City"
// 		}
// 	}
// ]
// - return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"

// Since there is a space in the 'home address' name, you need to use bracket notation to access the properties inside it

function makeLabel(person){
	var shippingLabel = '';
	shippingLabel = person.greeting + ' ' + person.givenName + ' ' + person.familyName + '\n' + person['home address'].streetNumber + ' ' + person['home address'].streetName + '\n' + person['home address'].city + ', ' + person['home address'].state + ' ' + person['home address'].zip;
	return shippingLabel;
}


console.log("Javascript is linked");

//Badal Moradia HW 3 Answers

//2. A parameter is the variable/input that is setup during a function declaration
// An argument is the input into the function when the function is being called.

//3. A return statement will not print anything anywhere by itselt. It will pass the value to the place where the function was actually called. A console.log inside of a function will actually print that value to the console.



//Palindrome

const palindrome = (input) => {
	input = input.toLowerCase();
	const splitString = input.split('');
	const reversedArray = splitString.reverse();
	const reversedWord = reversedArray.join('')
	if (reversedWord === input) {
		return true
	}
	return false
}

console.log(palindrome('Radar'));
console.log(palindrome('borscht'));




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

const sumDigits = (num) => {
	const stringDigits = num.toString();
	const arrDigits = stringDigits.split('');
	let sumNum = 0;
	for (let i = 0; i < arrDigits.length; i++) {
		sumNum = sumNum + parseInt(arrDigits[i])
	}
	return sumNum;
}

console.log(sumDigits(12345));


const calculateSide = (num1, num2) => {
	total = Math.pow(num1, 2) + Math.pow(num2, 2);
	return Math.sqrt(total);
}

console.log(calculateSide(8, 6));

















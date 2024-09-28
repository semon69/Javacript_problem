// Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.



const numbers = [1, 2, 2, 3, 4, 4, 6, 6, 7, 8, 8, 9, 10];

function getUniqueNumbers(numbersArray) {
    return Array.from(new Set(numbersArray));
}

// Get unique numbers and print the result
const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
// Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.


function findMaxValue(numbersArray) {
    // Check if array is empty
    if (numbersArray.length === 0) {
        return undefined;
    }

    let max = numbersArray[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }

    return max;
}

const numbers = [5, 8, 2, 10, 13];
const maxValue = findMaxValue(numbers);
console.log(maxValue);
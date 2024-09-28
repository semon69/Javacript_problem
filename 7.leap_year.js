// Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.


function isLeapYear(year) {
    // Leap year is divisible by 4, not divisible by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const year = 2000;

if (isLeapYear(year)) {
    console.log(` ${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
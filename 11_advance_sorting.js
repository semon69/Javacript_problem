// Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.


function advanceSorting(students){
    return students.sort((a, b) => b.grade - a.grade)
}

const students = [
    {name: "Emon", grade: 3.47},
    {name: "Rahim", grade: 3.02},
    {name: "Halim", grade: 3.67},
    {name: "Reaz", grade: 3.54},
]

console.log(advanceSorting(students));

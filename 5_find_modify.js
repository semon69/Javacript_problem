// Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 28 },
];

function findAndModifyAge(peopleArray, personName, newAge) {
  const person = peopleArray.find((person) => person.name === personName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

const updatedPeople = findAndModifyAge(people, "Bob", 20);
console.log(updatedPeople);

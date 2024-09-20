// Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


const books = [
  { title: "Moby Dick", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
];

function getBookTitles(booksArray) {
  return booksArray.map((book) => book.title);
}

// Print the result
const titles = getBookTitles(books);
console.log(titles);

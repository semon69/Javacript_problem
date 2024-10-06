// Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.



function arrayIntersection(arr1, arr2) {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArray.push(arr1[i])
        }
    }
    return newArray
}


const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 5, 7, 8, 1, 2, 4, 2]

console.log(arrayIntersection(arr1, arr2));
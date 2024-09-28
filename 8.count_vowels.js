// Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year


const countVowels = (text) => {
    const vowels = "aeiouAEIOU";
    let word = text.split("")
    let counts = 0
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        if (vowels.includes(word[i])) {
            counts++
        }
    }
    return counts
}

console.log(countVowels("Happy New Year emon"));
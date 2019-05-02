
console.log("Hello, sometimes why");

// Lightning Exercise: Write a function that will accept any string and 
// return the number of vowels. Start with simple console logs.

const input = ['Start with simple console logs.'];
const vowels = ["a", "e", "i", "o", "u"];


// Check if an element is a vowel.
let isVowel = (vowels) => {
  return input === vowels;
}

// Check the length of the returned string.
let vowelCount = (strang) => {
  return strang[i].length;
}

// chain the above pure functions together to add dogs' ages together in dog years:
let vowelFunction = vowels
  .filter(isVowel)
  .reduce(vowelCount)

console.log(vowelFunction);

// Anagram
// A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

const anagram = (str1, str2) => {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

console.log(anagram('abdcda', 'dcdbaa'))
// Palindrom is a text where it gives the same when returned.

const palindrom = (str) => {
  // turn the string to lowercase
  str = str.toLowerCase();
  // reverse input string and return the result of the
  // comparisong
  return str === str.split("").reverse().join("");
};

console.log("is palindrom: ", palindrom("racecar"));
console.log("is palindrom: ", palindrom("table"));
console.log("is palindrom: ", palindrom("Anna"));

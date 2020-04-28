const fizzBuzz = (n) => {
  //n%3 && n%5, then fizzbuzz
  //n%3 = 0, then fizz
  //n%5 = 0, then fuzz

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(20));

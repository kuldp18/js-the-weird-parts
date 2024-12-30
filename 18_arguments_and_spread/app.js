function greet(firstname, lastname, language, ...others) {
  // if (arguments.length === 0) {
  //   console.log("pass something for the love of god");
  //   return;
  // }
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(...others);

  console.log(arguments);
  console.log("----------------");
}

greet(); // undefined undefined undefined
greet("John"); // John undefined undefined
greet("John", "Doe"); // John Doe undefined
greet("John", "Doe", "en"); // John Doe en
greet("John", "Doe", "en", "111 Main St.", "New York"); // John Doe en [ '111 Main St.', 'New York' ]

/*
`arguments` is a special keyword in JavaScript that contains all the arguments passed to the function.
It is an array-like object but not an array. It does not have array methods like `map`, `filter`, etc.

Modern js now has ... spread operator which can be used to convert `arguments` to an array.


*/

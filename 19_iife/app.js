// function statement

function greet(name) {
  console.log("Hello " + name);
}

greet("John");

// function expression
let greetFunc = function (name) {
  console.log("Hello " + name);
};

greetFunc("John");

// immediately invoked function expression (IIFE)
let greeting = (function (name) {
  console.log("Hello " + name);
})("some name");

(function (name) {
  console.log("Hello " + name);
})("IIFE"); // classic example of IIFE

// () is always used for expressions, so we trick the parser by wrapping the function in parentheses.
// code written in iife is not accessible from outside the function and is safe.

// you can use arguments if you want to use something from outside the function.

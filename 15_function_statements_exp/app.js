//Function statements and function expressions

function greet() {
  console.log("hi"); //function statement
}
greet();

anonymousGreet();
console.log(anonymousGreet);

var anonymousGreet = function () {
  console.log("hi"); //function expression
};

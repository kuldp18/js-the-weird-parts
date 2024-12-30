function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

let sayHi = greet("Hi");

sayHi("Tony"); // Hi Tony

/*
Closures are a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—scope chain even after the outer function has returned. This is a very powerful feature in JavaScript.
*/

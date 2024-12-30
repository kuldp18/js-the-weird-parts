console.log(a); // undefined
b(); // Called b!
//console.log(c); // ReferenceError: c is not defined

var a = "hello!";
let c = "yo!";

function b() {
  console.log("Called b!");
}

console.log(a); // hello!
b(); // Called b!

/*
Hoisting means that the JavaScript engine will move all variable and function declarations to the top of the current scope before executing any code. This means that you can use a variable or function before you declare it in your code.

Varaibles are hoisted but not their values. Functions are hoisted with their bodies.

So variables will be undefined if they are used before they are declared. Functions will be available to be called before they are declared.

What about let and const variables? They are hoisted but not initialized. So you can't use them before they are declared.
*/

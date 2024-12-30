let person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log(`----------------`);
};
//logName(); // TypeError: this.getFullName is not a function

let logPersonName = logName.bind(person); // bind creates a copy of the function and sets the 'this' variable to the object passed to it

logPersonName("en"); // Logged: John Doe

logName.call(person, "en", "es"); //call invokes the function and sets the 'this' variable to the object passed to it, we can also pass arguments to the function

logName.apply(person, ["en", "hi"]); //apply invokes the function and sets the 'this' variable to the object passed to it, we can also pass arguments to the function as an array

// Difference between call and apply: call takes arguments separated by commas, apply takes arguments as an array

(function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log(`----------------`);
}).apply(person, ["gujarati", "marathi"]);

// In short, call, bind and apply are used to set the 'this' variable of a function to the object passed to it. bind creates a copy of the function and sets the 'this' variable to the object passed to it, call invokes the function and sets the 'this' variable to the object passed to it, we can also pass arguments to the function, apply invokes the function and sets the 'this' variable to the object passed to it, we can also pass arguments to the function as an array. Difference between call and apply: call takes arguments separated by commas, apply takes arguments as an array.

// Some real world examples of call, bind and apply:

// function borrowing

let person2 = {
  firstname: "Jane",
  lastname: "Doe",
};

console.log(person.getFullName.apply(person2)); // Jane Doe

// function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5.59)); // 11.18

// Function currying works by creating a copy of the function and setting the first argument to the value passed to it. In the above example, multiplyByTwo is a copy of the multiply function with the first argument set to 2. So, when we call multiplyByTwo with 5.59, it returns 2 * 5.59 = 11.18. This is useful when we have a function that takes multiple arguments and we want to create a new function that takes fewer arguments. This is called currying.

// Currying means setting some preset values to a function, which are used when the function is called. This is useful when we have a function that takes multiple arguments and we want to create a new function that takes fewer arguments. This is called currying.

// When we arguments to bind, bind creates a copy of the function, sets 'this' keyword, and sets the arguments permanently. This is called partial application. This is useful when we have a function that takes multiple arguments and we want to create a new function that takes fewer arguments. This is called currying.

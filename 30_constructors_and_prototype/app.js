function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.getFullname = function () {
    return this.firstname + " " + this.lastname;
  }; // creating methods inside the constructor function is not a good idea, because every object created by the constructor function will have its own copy of the method

  // constructors work as long as you don't return anything
}

// .prototype is not a property of the constructor function, but a property of the object created by the constructor function

// so this greet function is inherited by all objects created by the Person constructor function in their prototype chain

Person.prototype.greet = function () {
  return `Hello from ${this.firstname} ${this.lastname}!`;
};

let john = new Person("John", "Doe");
console.log(john);
// new keyword creates an empty object, then calls the function.
// the new keyword also sets the prototype of the object to the prototype of the constructor function
let jane = new Person("Jane", "Doe");
console.log(jane);
console.log(john.greet());
console.log(jane.greet());

Person.prototype.setAge = function (age) {
  this.age = age;
};

john.setAge(30);
jane.setAge(29);
console.log(john);
console.log(jane);

// Array.prototype.myCustomFeature = "cool!";
// let arr = ["apple", "banana", "cherry"];
// for (let prop of arr) {
//   console.log(prop);
// }
// use for of loop to iterate over the array
// for in loop will also iterate over the custom feature added to the prototype of the array
// so it is better to use for of loop to iterate over arrays

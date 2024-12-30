class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return "Hi " + this.firstname;
  }
}

console.log(Person);

let john = new Person("John", "Doe");
console.log(john);
console.log(john.greet());
// ES6 classes are just syntactic sugar over prototypal inheritance

let jane = new Person("Jane", "Doe");
console.log(jane);
console.log(jane.greet());

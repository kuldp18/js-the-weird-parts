let person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname;
  },
};

let john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

console.log(john);
console.log(john.greet());

// pure prototypal inheritance: Object.create() creates an empty object that has prototype of person

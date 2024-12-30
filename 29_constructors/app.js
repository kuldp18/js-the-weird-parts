function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.getFullname = function () {
    return this.firstname + " " + this.lastname;
  };

  // constructors work as long as you don't return anything
}

let john = new Person("John", "Doe");
console.log(john);
// new keyword creates an empty object, then calls the function.
let jane = new Person("Jane", "Doe");
console.log(jane);

let person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

let john = {
  firstname: "John",
  lastname: "Doe",
};

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john);
console.log(john.getFullName());

let jane = {
  firstname: "Jane",
};
jane.__proto__ = person;
console.log(jane);
console.log(jane.getFullName());

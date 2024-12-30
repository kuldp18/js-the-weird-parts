// console.log(this); //global object

function a() {
  console.log(this);
  this.greet = function () {
    console.log("Hello"); // greet is appended to the global object
  };
  this.name = "John";
}

let b = function () {
  console.log(this);
};

// a();
// greet();
// b();

/*
The this keyword in function expressions and function statements still refers to the global object. We can add new properties to the this object in function expressions and function statements and they can be used as if they were global variables.
*/

let c = {
  name: "The c object",
  log: function () {
    let self = this; // this refers to the object c, works because objects are passed by reference
    this.name = "Updated c object";
    console.log(this); // this refers to the object c

    let setName = function (newName) {
      //console.log(this); // this refers to the global object

      this.name = newName; // this will not update the name property of the object c
      // self.name = newName; // this will update the name property of the object c
    };

    setName("Updated again! The c object");
    console.log(this); // this refers to the object c
  },
};

c.log();

let d = {
  age: 30,
  log: () => {
    console.log(this.age); // this refers to the global object
  },
};

d.log();
console.log(name); // this property is added to the global object because of the setName function

/*
The `this` keyword in objects and classes refers to the object itself. `this` in functions nested inside a method of an object refers to the global object. To avoid this, we can assign `this` to a variable and use that variable instead, this works because objects are passed by reference and not value.

Arrow functions do not have their own `this` keyword. They inherit the `this` keyword from the parent scope. In this case, the parent scope is the global object.
*/

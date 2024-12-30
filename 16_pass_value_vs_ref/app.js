let a = 10;
let b = a;
a = 20;
console.log(`a: ${a}, b: ${b}`); // a: 20, b: 10

let person1 = { name: "John", email: "john@gmail.com" };
let person2 = person1;
person1.name = "Jane";
person1.age = 22;
console.log(person1); // { name: 'Jane', email:'john@gmail.com'}
console.log(person2); // { name: 'Jane', email: 'john@gmail.com'}

/*
PASS BY VALUE: Primitive types are passed by value. When a variable is assigned to another variable, a copy of the value is made. Changing the value of one variable does not affect the other variable.
Eg: Number, string, etc

PASS BY REFERENCE: Non primitive types are passed by reference. When a variable is assigned to another variable, a reference to the value is made. Changing the value of one variable affects the other variable.
Eg: Objects and arrays

Objects are also passed as reference to functions. When an object is passed to a function, a reference to the object is passed. If the object is changed inside the function, the changes are reflected outside the function.

When arrays are passed to functions, the original array is not mutated. The array is passed by reference, but the reference is copied. If the array is changed inside the function, the changes are not reflected outside the function.


Important Nuance:
Even though objects and arrays are passed by reference, reassigning the variable within a function will not affect the original reference outside the function because the reference itself is passed by value.

*/

// Objects are passed as reference to functions

let greet = { greeting: "hi" };

console.log(greet); // { greeting: 'hi' }

function changeGreet(greet) {
  greet.greeting = "hello";
}

changeGreet(greet);

console.log(greet); // { greeting: 'hello' }

let nums = [1, 2, 3];
console.log(`Before function: ${nums}`); // [1, 2, 3]

function changeNums(nums) {
  //nums.push(4); // [1, 2, 3, 4] - changes are reflected outside the function
  nums = [5, 6, 7]; // [5, 6, 7] - changes are not reflected outside the function because of reassignment
}

changeNums(nums);

console.log(`After function: ${nums}`); // [1, 2, 3]

let car = { make: "Toyota", model: "Camry" };

console.log(car); // { make: 'Toyota', model: 'Camry' }

function changeCar(car) {
  car = { make: "Honda", model: "Accord" }; // reassignment does not affect the original reference
}

console.log(car); // { make: 'Toyota', model: 'Camry' }

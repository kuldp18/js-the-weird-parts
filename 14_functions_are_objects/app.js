function greet() {
  console.log("hi");
}

greet.language = "english"; // adding a property to a function object
greet.random = 1000;

console.log(greet);
console.log(greet.language); // english
console.log(greet.random); // 1000

// FUNCTIONS ARE OBJECTS!

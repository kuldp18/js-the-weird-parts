function greet(name = "Friend") {
  // name = name || "Friend"; // Old way
  console.log(`Hello ${name}`);
}

greet(); // Hello Friend
greet("John"); // Hello John

console.log(libraryName); // lib2

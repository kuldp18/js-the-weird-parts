/*
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. It can be explicit, when it is done by developers in the code, or implicit, when it is done by JavaScript itself.
*/

let a = 1 + "2"; // number 1 is coerced into a string
console.log(a); // 12

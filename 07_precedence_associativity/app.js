/*
Operator precedence: It is an order in which the operators are executed in an expression.

Operator associativity: It is the order in which the operators are called in an expression. left-to-right or right-to-left. when operators have the same precedence.
*/

// let a = 3 + 4 * 5;
// console.log(a); // 23

let a = 2,
  b = 3,
  c = 4;
a = b = c;
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

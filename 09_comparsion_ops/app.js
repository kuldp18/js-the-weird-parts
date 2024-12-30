console.log(3 < 2 < 1); // true

/*
same precedence for < operator so we have to consider associativity
left-to-right associativity for < operator
3<2 = false
false is coerced to 0
0 < 1 = true
so the output is true
*/

console.log(1 < 2 < 3); // true

/*
same precedence for < operator so we have to consider associativity
left-to-right associativity for < operator
1<2 = true
true is coerced to 1
1 < 3 = true
so the output is true
*/

// true is coerced to 1, and false is coerced to 0
// Number(null) = 0
// Number(undefined) = NaN
console.log(Number(null)); // 0

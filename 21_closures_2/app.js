// function buildFunctions() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// let fs = buildFunctions();
// fs[0](); // 0
// fs[1](); // 1
// fs[2](); // 2

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i); // i is 3 after the loop ends
    });
    // arr.push(
    //   (function (j) {
    //     return function () {
    //       console.log(j);
    //     };
    //   })(i) // IIFE will return the value of proper i
    // );
  }
  return arr;
}

var fs = buildFunctions();
console.log(fs);

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

/*
Closures work differently in ES6. In ES6, the let keyword creates a new binding every time the function is called, which is why the output is 0, 1, 2. In ES5, the var keyword creates a single binding for the variable i, which is why the output is 3, 3, 3.

In simple words, var in for loops use the same variable, while let creates a new variable every time the function is called.  
*/

console.clear();

function b() {
  console.log(myVar); // 1
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

/*
Scope Chain
- line 12: myVar = 1 is created in the global execution context
- a() is executed, myVar = 2 is created in the execution context of a()
- b() is executed, myVar is not found in the execution context of b(), so it goes to the outer environment, which is the global execution context and finds myVar = 1
- myVar = 1 is printed inside b() at line 4
*/

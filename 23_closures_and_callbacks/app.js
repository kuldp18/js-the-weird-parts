function sayHiLater() {
  let greeting = "Hi!";
  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  let a = 1000;
  let b = 2000;
  callback();
}

tellMeWhenDone(function () {
  console.error("I am done");
});

tellMeWhenDone(function () {
  console.log("All done...");
});

/*
Callbacks are functions that are passed into another function as an argument to be executed later. In the above example, the tellMeWhenDone function takes a callback function as an argument and executes it at the end of the function. This allows us to run code asynchronously and perform tasks after a certain operation is completed. In this case, the callback function is used to log a message to the console or display an alert after the tellMeWhenDone function is finished executing.

We use closures all the time when using callbacks in JavaScript. The callback function has access to the variables defined in the outer function, even after the outer function has finished executing. This is possible because the callback function forms a closure over the variables in the outer function, allowing it to access and manipulate those variables.
*/

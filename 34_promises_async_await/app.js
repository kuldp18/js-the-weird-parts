// our own promise implementation
// states: pending, fulfilled, rejected
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) return;
    state = FULFILLED;
    value = result;

    handlers.forEach((handler) => handler(value));
  }

  function reject(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;

    catches.forEach((handler) => handler(value));
  }

  this.then = function (callback) {
    if (state === FULFILLED) {
      callback(value);
    } else {
      handlers.push(callback);
    }

    //return a Promise to chain
  };

  this.catch = function (callback) {
    if (state === REJECTED) {
      callback(value);
    } else {
      catches.push(callback);
    }
  };
  // executor is called immediately
  executor(resolve, reject);
}

// const doWork = (res, rej) => {
//   setTimeout(() => {
//     res("hello world");
//   }, 1000);
// };

// let someText = new CustomPromise(doWork);

// someText.then((value) => {
//   console.log(value);
// });

// someText.then((value) => {
//   console.log("then 2", value);
// });

// setTimeout(() => {
//   someText.then((value) => {
//     console.log("after finished ", value);
//   });
// }, 3000);

// Javascript Promise

// const doWork = (resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 1000);
// };
// const doOtherWork = (resolve, reject) => {
//   setTimeout(() => {
//     resolve("how are you?");
//   }, 3000);
// };

// let someText = new Promise(doWork);

// someText
//   .then((value) => {
//     console.log(`1st log: ${value}`);
//     return new Promise(doOtherWork);
//   }) // this returns a new promise, so it is attached to new promise
//   .then((value) => {
//     console.log(value);
//   });

// Practical example

// fetch("./video.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data[0]));

// async and await
const doWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 1000);
};

const doOtherWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("how are you?");
  }, 1000);
};

async function doAllTheWork() {
  const someText = new Promise(doWork);
  const text1 = await someText;
  console.log(text1);

  const someOtherText = new Promise(doOtherWork);
  const text2 = await someOtherText;
  console.log(text2);
}

doAllTheWork();

function mapForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function filterForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
}

let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = mapForEach(arr1, (item) => item * 2.56);
console.log(arr2);

let arr3 = mapForEach(arr1, (item) => item > 2);
console.log(arr3);

let checkPastLimit = function (limiter, item) {
  return item > limiter;
};

let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

let arr5 = filterForEach(arr1, (item) => item > 1);
console.log(arr5);

console.log(every([2, 4, 6, 8], (item) => item % 2 === 0));

let checkLimitSimple = function (limiter) {
  checkPastLimit.bind(this, limiter);
};

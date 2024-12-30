function waitThreeSeconds() {
  let currentTime = new Date().getTime();
  let ms = 3000 + currentTime; // current time + 3 seconds
  while (currentTime < ms) {
    console.log("waiting...");
  }
}

document.addEventListener("click", function () {
  console.log("click event!");
});

waitThreeSeconds();
console.log("finished execution");

// this code is buggy, so i skipped it

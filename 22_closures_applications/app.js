// Function factories

function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }

    if (language == "hi") {
      console.log("Namaste " + firstname + " " + lastname);
    }
  };
}

let greetEnglish = makeGreeting("en");
let greetSpanish = makeGreeting("es");
let greetHindi = makeGreeting("hi");

greetHindi("Tony", "Stark"); // Namaste Tony Stark

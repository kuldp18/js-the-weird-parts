(function (global, $) {
  let Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // list of supported languages
  const supportedLangs = ["en", "es"];

  // informal greetings
  const greetings = { en: "Hello", es: "Hola" };

  // formal greetings
  const formalGreetings = { en: "Greetings", es: "Saludos" };

  Greetr.prototype = {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },

    validate: function (lang) {
      if (!lang) {
        lang = this.language;
      }
      if (supportedLangs.indexOf(this.language) === -1) {
        throw `Invalid or unsupported language: ${this.language}`;
      }
      return `Language supported: ${this.language}`;
    },

    // set the language of the greeting and validate it
    setLanguage: function (lang) {
      if (!lang) {
        throw "Please provide a language";
      }

      this.language = lang;

      this.validate();

      return this;
    },

    // method that returns an informal greeting
    informalGreeting: function () {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    // method that returns a formal greeting
    formalGreeting: function () {
      return `${formalGreetings[this.language]}, ${this.fullName()}.`;
    },

    // greet method that can be chained, and if formal is true, it will return a formal greeting
    greet: function (formal = false) {
      let msg = formal ? this.formalGreeting() : this.informalGreeting();
      this.greeting = msg;
      this.log(msg);
      return this;
    },

    // log something to the console
    log: function (value) {
      if (console && value) {
        console.log(value);
      }
      return this;
    },

    // method that takes a jQuery selector and updates the text of the element with the greeting
    render: function (selector) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "Please provide a valid jQuery selector";
      }

      $(selector).text(this.greeting);

      return this;
    },
  };

  Greetr.init = function (
    firstName = "John", // default first name
    lastName = "Doe", // default last name
    language = "en" // default language: English
  ) {
    let self = this; // self points to the object that is created by Greetr.init
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
  };

  // set prototype of Greetr.init to Greetr.prototype
  Greetr.init.prototype = Greetr.prototype;

  // attach Greetr to the global object and provide a shorthand 'G$' for it
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);

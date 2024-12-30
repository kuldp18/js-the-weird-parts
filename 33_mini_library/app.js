let greeting = G$();
greeting
  .setLanguage("en")
  .greet()
  .render(".greeting")
  .setLanguage("es")
  .greet((formal = true))
  .render(".greeting");

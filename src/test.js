const tidyUp = require("./index");

const classes = tidyUp({
  myName: {
    is: "daniel",
    andMyLastName: {
      is: "Vieira Costa",
      iWasBornIn: {
        city: {
          name: "São Bernardo do Campo",
          state: {
            name: "São Paulo",
            country: {
              continent: "Sul Americano",
              name: "Brazil",
            },
          },
        },
      },
    },
  },
});

console.log(classes.myName.andMyLastName.getClasses());
// console.log(classes.title.getClasses());

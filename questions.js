export default [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["Red", "Green", "Blue"],
  },
  {
    type: "confirm",
    name: "confirmed",
    message: "Are you sure?",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password",
  },
  {
    type: "password",
    name: "confirmPassword",
    message: "Confirm your password",
    // Similar to writing '{if (answers.password === answers.confirmPassword) {return true} else {return "Passwords do not match"}}'
    validate(currentAnswer, previousAnswers) {
      return currentAnswer === previousAnswers.password
        ? true
        : "Passwords do not match";
    },
  },
];

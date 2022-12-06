// TODO: use 'promises from 'fs' module to read the file instead of 'callback'
// inquirer is a defualt module in node.js so no need to use curly braces or add .js
import inquirer from "inquirer";

import questions from "./questions.js";

// TODO: make sure the passwords match
const answers = await inquirer.prompt(questions);
console.log(answers);

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});

// split and join replace the spaces with dashes and.tolowercase() makes it all lowercase
// .json adds the .json extension
const fileName = `${answers.name.toLowerCase().split(" ").join("_")}.json`;

fs.writeFile(fileName, JSON.stringify(answers, null, 2), (err) => {
  console.log(`Saved to ${fileName}`);
});

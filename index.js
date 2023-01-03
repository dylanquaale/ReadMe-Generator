// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Questions container
const questions = [
   
    {
      type: 'input',
      message: 'What is the Title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a description of your project here:',
      name: 'description',
    },

    {
      type: 'input',
      message: 'How is your software installed?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How is your software used?',
      name: 'usage',
    },
    {
      type: 'checkbox',
      message: 'What kind of license do you want your project to have?',
      name: 'license',
      choices:["MIT", "Boost", "Apache", "Eclipse", "BSD 3-clause", "BSD 2-clause",]
    },
   
    {
      type: 'input',
      message: 'How can users contribute to this project?',
      name:'contribute',
    },
    {
      type: 'input',
      message: 'How can a user run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Questions?',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
   
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What credits are honored?',
      name: 'credits',
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    // console.log('Success you can view your readme file!')
  });
};
// template literals
function generatePage(userInput) {
  let markdown = `# README-Generator
  
  ![badge](https://img.shields.io/badge/license-${userInput.license}-important)
  ![badge](https://img.shields.io/badge/license${userInput.license}-BSD_3--Clause-blue.svg)
  ![badge](https://img.shields.io/badge/license${userInput.license}-BSD_2--Clause-orange.svg)
  ![badge](https://img.shields.io/badge/license${userInput.license}-Boost_1.0-lightblue.svg)
  ![badge](https://img.shields.io/badge/license${userInput.license}-EPL_1.0-red.svg)

  ${userInput.title}
  
  ## Description
  ${userInput.description}
  - What was your motivation?
  - Why did you build this project?
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${userInput.install}
  ## Usage
  ${userInput.usage}
  ## License
  ${userInput.license}
  ## Contributing
  ${userInput.contribute}
  ## Tests
  ${userInput.tests}
  ## Questions
  ${userInput.questions}
  ## What is your Github username?
  ${userInput.username} 
  ## What is your email address?
  ${userInput.email}
  ## Credits 
  ${userInput.credits}
   
  `
  return markdown;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(userInput) {
    console.log(userInput)
    writeToFile('README.md',generatePage(userInput));
  })
}
// Function call to initialize app
init();

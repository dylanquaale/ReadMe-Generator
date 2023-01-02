// /*GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README*/

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
      message: 'What kind of license should your project have?',
      name: 'license',
      choices:["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "BSD 2-clause", "N/A"]
    },
   
    {
      type: 'input',
      message: 'How can people contribute to this project?',
      name:'contribute',
    },
    {
      type: 'input',
      message: 'How can a user test your software?',
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
      message: 'What is email address?',
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

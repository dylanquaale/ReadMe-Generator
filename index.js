// TODO: Include packages needed for this application
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


const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./utils/generatePage.js');

const questions = [
    {
      type: 'input',
      message: 'What is your GitHub user name?',
      name: 'username',
      // validate: github_input =>{
      //   if(github_input){
      //     return true;
      //   }else{
      //     console.log('please enter github username')
      //     return false;
      //   }
      // }
    },
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'What kind of license should your project have?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'command',
    },
    {
      type: 'input',
      message: 'What command should be run to run test?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name:'contribute',
    },
    {
      type: 'input',
      message: 'What does the user need to know about installation?',
      name: 'install',
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


function generatePage(userInput) {
  let markdown = `# Title README-Generator
 
  # What is your Github username?
  ${userInput.username}
  # What is your projects name?
  ${userInput.project}
  # What kind of license should your project have?
  ${userInput.license}
  # What command should be run to install dependencies?
  ${userInput.command}
  # What command should be run to run test?
  ${userInput.tests}
  # What does the user need to know about using the repo?
  ${userInput.repo}
  # What does the user need to know about contributing to the repo?
  ${userInput.contribute}
  # Installation
  ${userInput.install}
  # Credits  
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











// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'color',
      message: 'What is your favorite color?',
      name: 'color',
    },
    {
      type: 'food',
      message: 'What is your favorite food?',
      name: 'confirm',
    },
    {
        type: 'input',
        message: 'What are you doing today?',
        name:'whatever'
    }
  
])



.then((response) =>
response.confirm === response.color
  ? console.log('Success!')
  : console.log('You are finished with the questions!!')
);


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

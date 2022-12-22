// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./utils/generatePage.js');



const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
      validate: github_input =>{
        if(github_input){
          return true;
        }else{
          console.log('please enter github username')
          return false;
        }
      }
    },
    {
      type: 'color',
      message: 'What is your favorite color?',
      name: 'color',
      validate: color_input =>{
        if(color_input){
          return true;
        }else{
          console.log('please enter github username')
          return false;
        }
      }
    },
    {
      type: 'food',
      message: 'What is your favorite food?',
      name: 'confirm',
      validate: food_input =>{
        if(food_input){
          return true;
        }else{
          console.log('please enter github username')
          return false;
        }
      }
    },
    {
        type: 'input',
        message: 'What are you doing today?',
        name:'whatever',
        validate: today_input =>{
          if(today_input){
            return true;
          }else{
            console.log('please enter github username')
            return false;
          }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Success you can view your readme file!')
  });
};

function generatePage(userInput) {
  let markdown = `# README-Generator
  # installation
  # credits  
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











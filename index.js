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
    console.log('success you can view your readme file')
  });
};

function generatePage(userInput) {
  let markdown = `# HELLO WORLD
  #installation
  #credits  
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







// TODO: Create an array of questions for user input
// const questions = [];
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     //   validate: nameInput => {
//     //     if (nameInput) {
//     //         return true;
//     //     } else {
//     //         console.log('Please enter your project name!');
//     //         return false; 
//     //     }
//     // }
//     },
//     {
//       type: 'color',
//       message: 'What is your favorite color?',
//       name: 'color',
//     //   validate: nameInput => {
//     //     if (nameInput) {
//     //         return true;
//     //     } else {
//     //         console.log('Please enter your project name!');
//     //         return false; 
//     //     }
//     // }
//     },
//     {
//       type: 'food',
//       message: 'What is your favorite food?',
//       name: 'confirm',
//       // validate: nameInput => {
//       //   if (nameInput) {
//       //       return true;
//       //   } else {
//       //       console.log('Please enter your project name!');
//       //       return false; 
//       //   }
//     // }
//     },
//     {
//         type: 'input',
//         message: 'What are you doing today?',
//         name:'whatever',
//     //     validate: nameInput => {
//     //       if (nameInput) {
//     //           return true;
//     //       } else {
//     //           console.log('Please enter your project name!');
//     //           return false; 
//     //       }
//     //   }
//     // }
  

// },
  


// const writeFile = data => {
//   fs.writeFile('README.md', data, err => {
//       // if there is an error 
//       if (err) {
//           console.log(err);
//           return;
//       // when the README has been created 
//       } else {
//           console.log("Your README has been successfully created!")
//       }
//   })
// }; 


// function call to initialize program
// questions()
// getting user answers 
// .then(answers => {
//     return generatePage(answers);
// })
// using data to display on page 
// .then(data => {
//     return writeFile(data);
// })
// catching errors 
// .catch(err => {
//     console.log(err)
// })



// function createNewFile(fileName,template){
//   fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
//     if(err){
//       console.log(err)
//     }
//     console.log('readme has been generated')
//   })
// }



// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

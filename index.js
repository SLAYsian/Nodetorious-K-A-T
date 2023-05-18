// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project. What was your motivation? What problem does it solve? What did you learn?',
    // message: {
    //   descr: 'Provide a brief description of your project.',
    //   motivation: 'What was your motivation?',
    //   solve: 'What problem does it solve?',
    //   learn: 'What did you learn?',
    //   },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instruction for use, include screenshots as needed.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What licence does your project use?',
    choices: [
      'MIT',
      'ISC',
      'Apache',
      'GNU GPL v3',
      'Boost',
      'IBM',
      'Mozilla',
      'BSD 3-Clause',
      'The Unlicense',
    ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'If you would like others to contribute to your project, please provide a step-by-step guideline of how to do so?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If you have any tests, please provide instructions on how to run them.',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
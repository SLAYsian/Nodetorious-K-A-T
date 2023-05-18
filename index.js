// TODO: Include packages needed for this application
// SECTION: PACKAGES
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
// SECTION: QUESTIONS ARRAY
const promptQuestions = () => {
  return inquirer.prompt([
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
    type: 'list',
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
      'no license',
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If you would like others to contribute to your project, please provide a step-by-step guideline of how to do so?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If you have any tests, please provide instructions on how to run them.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]);
};

// SECTION: GENERATE MARKDOWN
const generateMarkdown = (answers) => 
  `# ${answers.title}
  
  ## DESCRIPTION
  ${answers.description}
  
  ## TABLE OF CONTENTS

  ## INSTALLATION
  ${answers.installation}

  ## USAGE
  ${answers.usage}

  ## LICENSE
  ${answers.license}

  ## CONTRIBUTING
  If you are interested in contributing to this project, please:
  ${answers.contributing}

  ## TESTS
  ${answers.tests}

  ## QUESTIONS
  To see more of my work, please visit my GitHub page: https://github.com/${answers.github}!

  If you have any questions, please contact me at ${answers.email}.
  `;

// function generateMarkdown(answers) {
// let data = fs.readFileSync('README.md', 'utf-8');
// data = data.replace(/{%TITLE%}/g, answers.title);
// data = data.replace(/{%DESCRIPTION%}/g, answers.description);
// data = data.replace(/{%INSTALLATION}/g, answers.installation);
// data = data.replace(/{%USAGE%}/g, answers.usage);
// data = data.replace(/{%LICENSE%}/g, answers.license);
// data = data.replace(/{%CONTRIBUTING%}/g, answers.contributing);
// data = data.replace(/{%TESTS%}/g, answers.tests);
// data = data.replace(/{%GITHUB%}/g, answers.github);
// data = data.replace(/{%EMAIL%}/g, answers.email);
// return data;
// }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data);
//   console.log('Your README.md file has been successfully generated!');
// }

// TODO: Create a function to initialize app
function init() {
  promptQuestions()
   .then((answers) => writeFile(`${__dirname}/readme-generated/GENERATED.md`, generateMarkdown(answers)))
   .then(() => console.log('Your README.md file has been successfully generated!'))
   .catch((err) => console.error(err));
};

// Function call to initialize app
init();
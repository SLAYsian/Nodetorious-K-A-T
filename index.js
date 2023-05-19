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
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Please separate each step with a semicolon (;).',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instruction for use, separating each step with a semicolon (;).',
  },
  {
    type: 'input',
    name: 'usageImage',
    message: 'If you would like to add images to the usage section, please provide the URLs or local path to the images, separated by a semicolon (;).',
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
    message: 'If you would like others to contribute to your project, please provide a step-by-step guideline of how to do so. Please separate each step by a semicolon (;).',
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
  
  ${answers.license && (answers.license !== 'No license') ? `${generateLicenseBadge(answers.license)}` : ''}

  ${answers.description ? 
  `## DESCRIPTION\n---
  ${answers.description}` : ''}
  
  ## TABLE OF CONTENTS\n---
  ${answers.installation ? `- [Installation](#installation)` : ''}
  ${answers.usage ? `- [Usage](#usage)` : ''}
  - [License](#license)
  ${answers.contributing ? `- [Contributing](#contributing)` : ''}
  ${answers.tests ? `- [Tests](#tests)` : ''}
  ${(answers.github || answers.email) ? `- [Questions](#questions)` : ''}

  ${answers.installation ? `## INSTALLATION\n---
  ${answers.installation.split(';').map(step => `- ${step.trim()}`).join('\n')}\n` : ''}
  
  ${(answers.usage || answers.usageImage) ? 
  `## USAGE\n---
  ${answers.usage ? answers.usage.split(';').map(step => `- ${step.trim()}`).join('\n') : ''}\n\n${answers.usageImage ? answers.usageImage.split(';').map(image => `![Usage Image](${image.trim()})`).join('\n') : ''}` : ''}

  ## LICENSE\n---
  ${answers.license}

  ${answers.contributing ? `## CONTRIBUTING\n---
  If you are interested in contributing to this project, please follow these steps:\n ${answers.contributing.split(';').map(step => `- ${step.trim()}`).join('\n')}\n` : ''}

  ${answers.tests ? 
  `## TESTS\n---
  ${answers.tests}` : ''}

  ## QUESTIONS\n---
  ${answers.github ? `To see more of my work, please visit my GitHub page: https://github.com/${answers.github}!` : ''}

  ${answers.email ? `If you have any questions, please contact me at ${answers.email}.` : ''}
  `;

// SECTION: GENERATE LICENSE BADGES
function generateLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case 'MIT':
      licenseBadge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'ISC':
      licenseBadge = '![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;
    case 'Apache':
      licenseBadge = '![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GNU GPL v3':
      licenseBadge = '![GNU GPL v3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Boost':
      licenseBadge = '![Boost License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'IBM':
      licenseBadge = '![IBM License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
      break;
    case 'Mozilla':
      licenseBadge = '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'The Unlicense':
      licenseBadge = '![The Unlicense License](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    case 'no license':
      licenseBadge = '';
      break;
    default:
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}


// TODO: Create a function to initialize app
function init() {
  promptQuestions()
   .then((answers) => writeFile(`${__dirname}/README.md`, generateMarkdown(answers)))
   .then(() => console.log('Your README.md file has been successfully generated!'))
   .catch((err) => console.error(err));
};

// Function call to initialize app
init();
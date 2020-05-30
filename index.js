const fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "project",
    message: "What is your projects name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of the project:"
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to run dependencies?"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run test?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?"
  },
  {
    type: "list",
    name: "license",
    message: "What licence will it use?",
    choices: ["Apache", "MIT","GNU","Ansible","Bash"]
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
    ]).then(function({ username, project, description, dependencies, test, usage, contribution, license, email }) {
              
const readme =` 
# ${project}

## Description:
${description}

## Table of Content
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

## Installation:
To install necessary dependencies, run the following command: ${dependencies}

## Usage:
${usage}

## License:
${license}

## Contribution:
${contribution}

## Test:
${test}

## Questions:
If you have any questions feel free to reach me on ${email} and find me on GitHub as ${username}.`;
      
fs.writeFile("README.md", readme, function(err) {
    if (err) {
        throw err;
    }

      console.log("Success!");
    });
});
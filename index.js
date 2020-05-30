const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
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
      }
  ]);
}


function generateREADME(answers) {
      return `
    # ${answers.project}

    ## Description
    ${answers.description}

    ## Table of Content
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contribution](#contribution)
    *[Tests](#tests)
    *[Questions](#questions)

    ## Installation
    To install necessary dependencies, run the following command: ${answers.dependencies}

    ## Usage
    ${answers.usage}

    ## License
    

    ## Contribution
    ${answers.contribution}

    ## Test
    ${answers.test}

    ## Questions 
    `
}

function getGitHub({ username }) {
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(function(res) {
      // console.log(res.data);
      console.log(res.data.avatar_url);
      // let avatar = res.data.avatar_url;
      console.log(res.data.email);
      // let email = res.data.email;
  });
} 


async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();

    const RD = generateREADME(answers);

    await writeFileAsync("README.md", RD);

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
};

init();
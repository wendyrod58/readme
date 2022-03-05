// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(" this is the license slected", license);
  if (license === 'None') {
    return ``;
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log("Inside generate markdown file ", data); 
  return `# ${data.title}

  # Description 
  ${data.Description}

  # Table of Contents
  * [Installation](#Installation)
  * [usage](#Usage)
  * [License Badge](#License)
  * [Contributing](#Contributing)
  * [Tests](#Test)
  * [Questions](#Questions)

# Installation
${data.Instructions}
https://drive.google.com/file/d/1R_1as51w4XaePhHrmJaSxhm1fZ6dd8Yy/view

# usage
${data.usage}

# license Badge 
${renderLicenseBadge(data.license)}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
${data.questions}

  `;
}

module.exports = generateMarkdown;

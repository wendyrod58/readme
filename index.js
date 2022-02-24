// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js"); 

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Please enter title'
    },
    {
    name: 'Description',
    type: 'input',
    message: 'Enter description'
},
{
    name: 'tableOfContents',
    type: 'input',
    message: 'Enter contents'
},
{
    name: 'installationInstructions',
    type: 'input',
    message: 'Enter instructions',
},
{
    name: 'usage',
    type: 'input',
    message: 'Enter usage',
}, 
{
    name: 'license',
    type: 'list',
    message: 'please select a license for your project ?',
    choices: ['MIT', 'Mozilla Public License 2.0', 'None']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //console.log("Trying to create a file", fileName, data); 
    fs.writeFile(fileName, data, (error, response) => {
        if( error) { console.log("Error creating file ", error)}; 

        console.log("Readme generated successfully"); 
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to read me generator ..............."); 
    inquirer.prompt(questions).then(answers => {
        console.log("Answers", answers);
        //convert into a readme friendly format 
        const convertedData = generateMarkdown(answers); 
        console.log("Converted Data", convertedData); 

        writeToFile("README.md", convertedData); 
    });
}

// Function call to initialize app
init();

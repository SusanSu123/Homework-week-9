// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const generateMarkdown = require ("./assets/utils/generateMarkdown")
    
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is the name of your project?",
    name: "title"
},
{
    type: "input",
    message: "Pleasd enter a description of your project.",
    name: "Description"
},
{
    type: "input",
    message: "What are the installations for this project. Write NONE if no installations",
    name: "Installation"
},
{
    type: "input",
    message: "Who contributed on this project?",
    name: "Contribution"
},
{
    type: "checkbox",
    message: "Please select a license.",
    choices: ["MIT", "ISC", "Apache", "BSD", "GNU"],
    name: "License"
},
{
    type: "input",
    message: "What is the use of the application",
    name: "usage",
},
{
    type: "input",
    message: "What is your GitHub username",
    name: "UserName"
},
{
    type: "input",
    message: "What is your email address",
    name: "Email"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("Success!");
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md" , generateMarkdown(data));
    })


}

// Function call to initialize app
init();

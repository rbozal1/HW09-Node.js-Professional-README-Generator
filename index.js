const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { prompt } = inquirer;
// const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

const questions = [
{
    type:"input",
    name:"title",
    message: "What is your project title?"
},
{
    type:"input",
    name:"description",
    message: "Give a brief description of your project: "
},

{
    type:"input",
    name:"installation",
    message: "What are the steps required to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
},
{
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "APACHE2.0",
        "GPL3.0",
        "BSD3",
        "MIT",
        "None"
    ]
},
{
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "test",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
 }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
        console.log('✔️  Successfully wrote to README.md');
    })    
}

// function call to initialize program
init();

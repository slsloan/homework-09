const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "url",
        message: "the URL to your project?",
    },
    {
        type: "input",
        name: "project",
        message: "What is your project's name?",
    },

    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please write about the usage of your project",
    },
    {
        type: "input",
        name: "contributing",
        message: "What should the user know about contributing to the repo?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponse }));
    });
}

init();
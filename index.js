// Link to inquirer npm
const inquirer = require('inquirer');

// Link to file system
const fs = require ('fs');

// Links to each of the js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function generateHTML(Manager, Engineer, Intern) {
    const teamPage = ``
}

const menuQuestions = [
    {
        message: `If you would like to add an additional Team Member, please select from the following options. Otherwise, select Exit when you're done building your team's profile.`,
        type: `list`,
        choices: [
            `Engineer`,
            `Intern`,
            `Exit`
        ],
        name: `mainMenu`
    }
];

// Questions for manager input by user
// Set up manager questions to be first.
const managerQuestions = [
    {
        type: `input`,
        message: `You will be the manager of this team. Please enter your name.`,
        name: 'managerName'
    },
    {
        type: `input`,
        message: `Please assign yourself an employee ID.`,
        name: `managerID`
    },
    {
        type: `input`,
        message: `What is your email address?`,
        name: `managerEmail`
    },
    {
        type: `input`,
        message: `What is the best phone number to contact you?`,
        name: `officeNumber`
    },
]


// Questions for engineer input by user
const engineerQuestions = [
    {
    type: `input`,
    name: `engineerName`,
    message: `Please enter the engineer's name.`
    },
    {
    type: `input`,
    name: `engineerId`,
    message: `Please assign this engineer an employee ID.`
    },
    {
        type:`input`,
        name: `engineerEmail`,
        message: `Please enter the engineer's email address.`
    },
    {
        type:`input`,
        name: `engineerGithub`,
        message: `Please enter the engineer's Github username.`
    }
]


// Questions for intern input by user
const internQuestions = [
    {
        type: `input`,
        name: `internName`,
        message: `Please enter the intern's name.`
    },
    {
        type: `input`,
        name: `internId`,
        message: `Please assign this intern an employee ID.`,
    },
    {
        type:`input`,
        name: `internEmail`,
        message: `Please enter the intern's email address.`
    },
    {
        type:`input`,
        name: `internSchool`,
        message: `What school does the intern attend?`
    }
]

function addEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then(answer => {
        new Engineer(answer)
        secondInit();
    })
    .catch(console.error)
}

function addIntern() {
    inquirer
    .prompt(internQuestions)
    .then(answer => {
        new Intern(answer)
        secondInit()
    })
    .catch(console.error)
}

function handleInitialChoice(answer) {
    switch (answer.mainMenu) {
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern': 
            addIntern();
            break;
        default:
            console.log('Goodbye!')
            generateHTML();
    }
}

// This function prompts the user to add Engineer/Intern or Exit the program
function secondInit() {
    inquirer
    .prompt(menuQuestions)
    .then(answer => {
        handleInitialChoice(answer)
    })
    .catch(console.error)
}

// Function initializes the prompt to ask manager questions, 
function init() {
    inquirer
    .prompt(managerQuestions)
    .then(answer => new Manager(answer))
    .then(secondInit)
    .catch(error => {
    if(error){
        throw error
        }
    });
}

console.log(`Welcome to the Team Profile Generator!`)
// Function call to initialize app
init();
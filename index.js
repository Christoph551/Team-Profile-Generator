// Link to inquirer npm
const inquirer = require('inquirer');

// Link to file system
const fs = require ('fs');

// Links to each of the js files
const manager = ('./lib/Manager')
const employee = ('./lib/Employee')
const engineer = ('./lib/Engineer')
const intern = ('./lib/Intern')

// Questions for manager input by user
const managerQuestions = () => {
[
    {
        type: `input`,
        message: `Please enter the manager's name.`,
        name: 'managerName'
    },
    {
        type: `input`,
        message: `Please assign this manager an employee ID.`,
        name: `managerID`
    },
    {
        type: `input`,
        message: `Please enter the manager's email address.`,
        name: `managerEmail`
    },
    {
        type: `input`,
        message: `Please enter the manager's office number.`,
        name: `officeNumber`
    },
]
engineerQuestions();
}

// Questions for engineer input by user
const engineerQuestions = () => {
    [
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
internQuestions();
}

// Questions for intern input by user
const internQuestions = () => {
[
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
appendFile();
}

// Setting up functions to append data to the html document.
function appendFile(fileName, data) {
    const contents = renderTeam(data);
    
fs.appendFileSync(fileName, contents)
}

// Function initializes the prompt to ask user questions, 
// then append the html file function fires
function init() {
inquirer
    .prompt(managerQuestions)
    .then(answers => {appendFile('renderTeam.html', answers)}) 
    .catch(error => {
        if(error){
            throw error
        }
    })
}

// Function call to initialize app
init();
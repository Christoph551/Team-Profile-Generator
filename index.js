// Link to inquirer npm
const inquirer = require('inquirer');

// Link to file system
const fs = require ('fs');

// Links to each of the js files
const employee = ('./lib/Employee')
const engineer = ('./lib/Engineer')
const intern = ('./lib/Intern')
const manager = ('./lib/Manager')

// Set up template for questions
const questions = [
    {
        type: 'input',
        message: '',
        name: ''
    },
    {
        type: 'input',
        message: '',
        name: ''
    },
    {
        type: 'input',
        message: '',
        name: ''
    },
    {
        type: 'input',
        message: '',
        name: ''
    },
    {
        type: 'input',
        message: '',
        name: ''
    },
]

// Copied from README-Generator app as a template to reference.
function appendFile(fileName, data) {
    const contents = generateMarkdown(data);
    
fs.writeFileSync(fileName, contents)
}

function init() {
inquirer
    .prompt(questions)
    .then(answers => {appendFile('index.html', answers)}) 
    .catch(error => {
        if(error){
            throw error
        }
    })
}

// Function call to initialize app
init();
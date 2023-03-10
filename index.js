// Link to inquirer npm
const inquirer = require('inquirer');

// Link to file system
const fs = require ('fs');

// Links to each of the js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Test Function to generate HTML
function generateHTML(Manager, Engineer, Intern) {
    const teamPage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
            crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    
    <!-- Added custom style properties to adjust the styling from Bootstrap -->
    <header style="font-size:50px; display:flex; justify-content:center; height:200px; align-items:center;" 
        class="p-3 m-2 bg-danger text-white">
        My Team
    </header>
    
    <body>
        <main class="p-5" style="display:flex; align-items:center;">
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
            crossorigin="anonymous">
        </script>
    </body>
    </html>`
    
    fs.writeFile(`./src/team.html`, teamPage, (err) => {
        if (err) {
            throw err;
        }
        console.log(`The file has been saved!`)
        generateManager();
        generateEngineer();
        generateIntern();
    }
)}

function generateManager() {
    const managerCard = 
        `<!-- div for overall Manager Card -->
            <div class="card m-2" style="display: flex;
                                        align-items: center;
                                        width: 300px;
                                        height: 300px;
                                        background-color: #c6c6c6;">
                <!-- Blue background at the top of the card -->
                <div class="card p-3 m-2 bg-primary text-white" style="width: 290px; height: 115px;">
                    <div>
                        <p style="font-size: 24px; display:flex; justify-content:center;">Chris Simmonds</p>
                    </div>
                    <div>
                        <p style="display:flex; justify-content:center;">Manager</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li style="font-size:14px;"class="list-group-item">ID: 1<a href=""></a></li>
                        <li style="font-size:14px;"class="list-group-item">Email: <a href="mailto:christophersimmonds551@gmail.com">christophersimmonds551@gmail.com</a></li>
                        <li style="font-size:14px;"class="list-group-item">Office Number: 555-555-5555<a href=""></a></li>
                    </ul>
                </div>
            </div>`

    fs.appendFile(`./src/team.html`, managerCard, (err) => {
        if (err) {
            throw err;
        }
        console.log(`The file has been saved!`)
    }
)}


function generateEngineer(data) {
    const engineerCard =
            `<!-- div for overall Engineer Card -->
            <div class="card m-2" style="display: flex;
                                        align-items: center;
                                        width: 300px;
                                        height: 300px;
                                        background-color: #c6c6c6;">
                <!-- Blue background at the top of the card -->
                <div class="card p-3 m-2 bg-primary text-white" style="width: 290px; height: 115px;">
                    <div>                                                          <!-- Employee Name -->
                        <p style="font-size: 24px; display:flex; justify-content:center;">${data.name}</p>
                    </div>
                    <div>                                     <!-- Employee Role -->
                        <p style="display:flex; justify-content:center;">${data.Engineer}</p>
                    </div>
                </div>
                    <div class="card" style="width: 18rem;">
                        <!-- Employee ID, Email, GitHub -->
                        <ul class="list-group list-group-flush">
                            <li style="font-size:14px;" class="list-group-item">ID: 2<a href=""></a></li>
                            <li style="font-size:14px;" class="list-group-item">Email: <a href="mailto:minor.jbm@gmail.com">minor.jbm@gmail.com</a></li>
                            <li style="font-size:14px;" class="list-group-item">GitHub Profile: <a href="https://github.com/jminor90">jminor90</a></li>
                        </ul>
                    </div>
                </div>`

    fs.appendFile(`./src/team.html`, engineerCard, (err) => {
        if (err) {
            throw err;
        }
        console.log(`The file has been saved!`)
    }
)}

function generateIntern() {
    const internCard = 
            `<!-- div for overall Intern Card -->
            <div class="card m-2" style="display: flex;
                                        align-items: center;
                                        width: 300px;
                                        height: 300px;
                                        background-color: #c6c6c6;">
                <!-- Blue background at the top of the card -->
                <div class="card p-3 m-2 bg-primary text-white" style="width: 290px; height: 115px;">
                    <div>                                                          <!-- Employee Name -->
                        <p style="font-size: 24px; display:flex; justify-content:center;">Logan Peterson</p>
                    </div>
                    <div>                                     <!-- Employee Role -->
                        <p style="display:flex; justify-content:center;">Intern</p>
                    </div>
                </div>
                    <div class="card" style="width: 18rem;">
                        <!-- Employee ID, Email, GitHub -->
                        <ul class="list-group list-group-flush">
                            <li style="font-size:14px;" class="list-group-item">ID: 4<a href=""></a></li>
                            <li style="font-size:14px;" class="list-group-item">Email: <a href="mailto:codeDevLogan@gmail.com">codeDevLogan@gmail.com</a></li>
                            <li style="font-size:14px;" class="list-group-item">GitHub Profile: <a href="https://github.com/codeDevLogan">codeDevLogan</a></li>
                        </ul>
                    </div>
                </div>`

    fs.appendFile(`./src/team.html`, internCard, (err) => {
        if (err) {
            throw err;
        }
        console.log(`The file has been saved!`)
    }
)}

const team = [];


// Questions for main menu input by user
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

// Function to add engineer to team array
function addEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then(answer => {
        new Engineer(answer)
        secondInit();
    })
    .catch(console.error)
}

// Function to add intern to team array
function addIntern() {
    inquirer
    .prompt(internQuestions)
    .then(answer => {
        new Intern(answer)
        secondInit()
    })
    .catch(console.error)
}

// Function to handle the user's choice of Engineer/Intern/Exit
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
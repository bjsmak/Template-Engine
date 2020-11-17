const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

const team = [];
console.log('test');
function createTeam(){
    //Inquirer function to prompt user for role
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role would you like to add?',
            name: 'roleSelect',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'None'
            ]
        }
    ]).then(input => {
        //Switch case for the roles
        switch(input.roleSelect){
            case 'Manager': addManager(); 
            break;
            case 'Engineer': addEngineer();
            break;
            case 'Intern': addIntern();
            break;
            case 'None': render(team);
            break;
        }
    })


    //Function for adding a manager to the array
    function addManager(){
        //Questions for manager
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the manager?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: "What is the manager's email?",
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: "What is the manager's ID?",
                name: 'managerID',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'managerOffice',
            }
        ]).then(input => {
            //Log information into created classes and push newly created manager into team array
            const manager = new Manager(input.managerName, input.managerEmail, input.managerID, input.managerOffice);
            team.push(manager);

            createTeam();
        })
    }
    //Function for adding an intern
    function addIntern(){
        //Questions for Intern
        inquirer.prompt([
            {
                type:'input',
                message:"What is the name of the intern?",
                name: "internName"
            },
            {
                type:'input',
                message:"What is the intern's email?",
                name: "internEmail"
            },
            {
                type:'input',
                message:"What is the intern's ID?",
                name: "internID"
            },
            {
                type:'input',
                message:"What is the name of the intern's school?",
                name: "internSchool"
            }
        ]).then(input =>{
            //Log information into Intern class and push to array
            const intern = new Intern(input.internName, input.internEmail, input.internID, input.internSchool);
            team.push(intern);

            createTeam();
        })
    }

    //Function for adding an engineer
    function addEngineer(){
        //Questions for engineer
        inquirer.prompt([
            {
                type:'input',
                message:"What is the name of the engineer?",
                name: "engineerName"
            },
            {
                type:'input',
                message:"What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type:'input',
                message:"What is the engineer's ID?",
                name: "engineerID"
            },
            {
                type:'input',
                message:"What is the engineer's github username?",
                name: "engineerGitHub"
            }
        ]).then(input =>{
            //Log information into Engineer class and push to array
            const engineer = new Engineer(input.engineerName, input.engineerEmail, input.engineerID, input.engineerGitHub);
            team.push(engineer);

            createTeam();
        })
    }
}



//Export
module.exports = team;

//Initial run of the function
createTeam();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function willn
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

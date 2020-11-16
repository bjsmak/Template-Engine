// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
//Require from Employee
class Engineer extends Employee {
    //Constructor Function
    constructor(name, email, id, github){
        //Super function to call back Employee
        super(name, email, id)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
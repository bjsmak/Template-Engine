// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee");
//Require from Employee
class Engineer extends Employee {
    //Constructor Function
    constructor(name, email, id, github){
        //Super function to call back Employee
        super(name, email, id)
        github = this.github;
    }

    getGitHub(){
        return this.github;
    }
    
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
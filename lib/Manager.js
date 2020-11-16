// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    //Constructor Function
    constructor(name, email, id, officeNumber){
        super(name, email, id)
        officeNumber = this.officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
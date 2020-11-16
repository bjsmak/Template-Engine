// TODO: Write code to define and export the Employee class
class Employee {
    //Constructor function
    constructor(name,email,id,github){
        name = this.name;
        email = this.email;
        id = 333;
        this.github = github;
    }


getName(){
    return this.name;
}

getName(){
    return this.email;
}

getName(){
    return this.id;
}

getName(){
    return this.github;
}

getRole() {
    return 'Employee';
}
}

module.exports = Employee;
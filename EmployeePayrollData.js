class EmployeePayrollData {
    //property
    id;
    salary;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
    }
    //getter and setter
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 20000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());
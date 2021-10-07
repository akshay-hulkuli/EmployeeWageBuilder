
class EmployeePayrollData {
        
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect! please enter correct one';
    }
    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Id is not non zero positive number';
    }
    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary must be non zero positive number';
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('(^M$)|(^F$)');
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw 'gender must be either M or F';
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if(new Date() >= startDate) 
            this._startDate = startDate;
        else throw 'Invalid date it can not be a future date'; 
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary+", gender="+ this.gender+", start date="+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name = "jo";
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.id = -1;
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.salary = -2000;
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.gender = "MF";
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.startDate = new Date()+1;
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(2, "Tanisha", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
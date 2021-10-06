const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME : 
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
             return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS ){
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - TotalWorkingDays: "+totalWorkingDays+"  TotalHour: "+ totalEmpHrs+"  Emp Wage: "+ empWage);


// UC 7A 

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+ totalWorkingDays+ " Total hrs:"+ totalEmpHrs+ " Emp Wage: "+ totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A = Emp wage with reduce: "+ empDailyWageArr.reduce(totalWages,0));

//UC 7B

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr ++;
    return dailyCntr + " = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage map");
console.log(mapDayWithWageArr);

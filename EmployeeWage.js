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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS ){
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

console.log(empDailyWageMap)
let empWage = calcDailyWage(totalEmpHrs);
console.log("TotalWorkingDays: "+totalWorkingDays+"  TotalHour: "+ totalEmpHrs+"  Emp Wage: "+ empWage);

console.log("total Emp wage from the map is:"+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));

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

//UC 7C

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Day with full time wage earned");
console.log(fullDayWageArr)

//UC 7D
function findFirstFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time full time wage earned : "+mapDayWithWageArr.find(findFirstFullTimeWage));

//UC 7E
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));

//UC 7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F - if there any days with part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - umber of days Emp worked: "+empDailyWageArr.reduce(totalDaysWorked,0));


//UC9
const findTotal = (totalVal,dailyVal) => {
    return totalVal+dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal,0);
console.log("Using arrow- employee wage = "+" Total hours: "+ totalHours +" Total wage: "+ totalSalary);

let nonWorkingDays = new Array();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();

empDailyHrsMap.forEach((value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);
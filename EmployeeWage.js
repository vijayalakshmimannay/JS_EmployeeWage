
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR  = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160; 
function getWorkingHours(empCheck)
{
    switch(empCheck)
   {
    case IS_PART_TIME:
        
        return PART_TIME_HOURS;
       
    case IS_FULL_TIME:
    
        return FULL_TIME_HOURS;
            
    default:
        return 0;    
        
   }
} 
function calDailyWage(empHrs) {
   return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random() * 10) % 3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
   empDailyWageArr.push(calDailyWage(empHrs));
}
//Array Helper Functions
//UC 7A  Calc total Wage using Array forEach traversal or reduce method

let totalEmpWage = 0;
function sum (dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " +  totalWorkingDays + ", " + "Total Hrs: " +  totalEmpHrs + ", " + "Emp Wage: " +  totalEmpWage );
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("7A Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//7B show the Day along with Daily Wage using ArrayMap
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    //return dailyCounter + " = " + dailyWage;
    return "Day" + dailyCounter + " = " + "wage" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("7B Daily wage using map : " + mapDayWithWageArr);

//7C Show Days when Full time wage of 160 were earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C Daily wage filter when fulltime wage is 160 earned: " + fullDayWageArr);

//7D  Find the first occurence when Full Time Wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("7D First full time wage using find function " + mapDayWithWageArr.find(findFullTimeWage));

//7E -  Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("7E Check all elment having full time wage using every function : " + fullDayWageArr.every(isAllFullTimeWage));

//7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("7F Check if any part time wage using some function : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("7G Total number of days employee worked :" + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8 Map Functions

console.log("Employee Wage Map totalHrs: " + 
Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
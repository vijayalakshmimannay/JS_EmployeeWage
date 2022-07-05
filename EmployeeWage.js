
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const No_Of_Working_Days = 20;
//UC 3 Using Function
function getWorkingHours(empCheck) {
    //UC 2 Using Switch Case
    switch(empCheck )
    {
        case IS_PART_TIME:
        
            return PART_TIME_HOURS;
           
        case IS_FULL_TIME:
        
            return FULL_TIME_HOURS;
                
        default:
            return 0;    
     }
}
//UC5 calculate wages till a condtion of total working hours 160 or max days of 20 is reached for a month
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS= 20;
let totalempHrs = 0;
let totalWorkingDays = 0;
while (totalempHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalempHrs += getWorkingHours(empCheck);

}
let empWage = totalempHrs * WAGE_PER_HOUR;
console.log("Total Days : " + totalWorkingDays +  " , Total Working Hours : " + totalempHrs + " , Employee Wage : " + empWage);
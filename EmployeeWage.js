
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
//UC4 wages for a Month assuming 20 working days in a Month
let empHrs = 0;
for (let day =0; day < No_Of_Working_Days; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Working Hours: " + empHrs + ", Employee Wage: " + empWage);
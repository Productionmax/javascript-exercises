const leapYears = function(years) {
    if (years % 4 === 0 && years % 100 > 0){
        return true;
    } else if (years % 400 === 0){
        return true;
    }
    else {return false};
};
console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;

// years % 4 = 0 => leap years
// years % 100 = 0 && !(years % 400 = 0) => not leap years
// npm test leapYears.spec.js
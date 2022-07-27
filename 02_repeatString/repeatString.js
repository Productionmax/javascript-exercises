let repeatedString = "";
const repeatString = function(str,times) {
    for (let i=0;i<times;i++){
        if (times < 0){
            break;
        }
        else{repeatedString += str};
    }
    return repeatedString;  
};
let times=0;
let str = "hey";
// Do not edit below this line
module.exports = repeatString;

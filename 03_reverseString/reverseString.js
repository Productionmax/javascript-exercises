const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};
// YOu can split reverse and join in one line
// Do not edit below this line
module.exports = reverseString;

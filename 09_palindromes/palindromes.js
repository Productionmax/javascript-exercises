const palindromes = function (palin) {
    let stringClean = palin.replace(/\W/g, '');
    let StringLower = stringClean.toLowerCase();
    let splitString = StringLower.split("");
    let reverse = splitString.reverse();
    let joinArray = reverse.join("");
    if (joinArray === StringLower){
        return true;
    } else {
        return false;
    }
};
console.log(palindromes("ZZZZ car, a man, a maracaz."));
// Do not edit below this line
module.exports = palindromes;
// npm test palindromes.spec.js
const sumAll = function(firstNum,secondNum) {
    let range = [firstNum,secondNum];
    let max = Math.max(firstNum,secondNum); // FInds the largest value within the list
    let min = Math.min(firstNum,secondNum); // FInds the smallest value within the list
    let totalSum = 0;
    if (min>0 && max>0 && typeof firstNum === 'number' && typeof secondNum === 'number'){
        for (i=min;i<=max;i++){
        totalSum += i;

        }
    } else{
        totalSum = 'ERROR'
    } 
    
    return totalSum;
};  
console.log(sumAll(123,4))
// Do not edit below this line
module.exports = sumAll;
// npm test sumAll.spec.js
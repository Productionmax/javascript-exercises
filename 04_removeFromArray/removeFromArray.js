const removeFromArray = function (presentArray, ...multArgs) {
    // let removedValue1 = Array.indexOf(multArgs);
    // console.log(multArgs);
    // let removed = Array.splice(removedValue1, 1);
    //console.log(removed);
    // return Array;
    let Array = presentArray.slice(); // need to do this so that the present array stays fresh so that iterations dont run out
    for (let i = 0; i < presentArray.length; i++){ // so the unchanging array is the one used in comparison
        if (Array.includes(multArgs[i])) {
                Array.splice(Array.indexOf(multArgs[i]), 1)
        } 
    } 
    return Array;
};
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;


//npm test removeFromArray.spec.js

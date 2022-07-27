const removeFromArray = function (Array, ...multArgs) {
    // let removedValue1 = Array.indexOf(multArgs);
    // console.log(multArgs);
    // let removed = Array.splice(removedValue1, 1);
    //console.log(removed);
    // return Array;
    for (let i = 0; i < Array.length; i++){
        if (Array.includes(multArgs[i])) {
                Array.splice(Array.indexOf(multArgs[i]), 1)
        }
    } 
    return Array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;


//npm test removeFromArray.spec.js

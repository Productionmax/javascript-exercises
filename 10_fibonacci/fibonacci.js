const fibonacci = function(n) {
    if (n<0){
        return "OOPS";
    }
    if (n <= 1){
        return n;
    }
    const result = [1,1];
    for (let i = 2; i<= n;i++){
        result[i] = result[i-2] + result [i-1];
    }
    return result[n-1];
};
console.log(fibonacci("2"));
// Do not edit below this line
module.exports = fibonacci;
//npm test fibonacci.spec.js
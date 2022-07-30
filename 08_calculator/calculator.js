const add = function(add1,add2) {
  let addition = add1 + add2;
  return addition;
};

const subtract = function(sub1,sub2) {
	let subtraction = sub1 - sub2;
  return subtraction;
};

const sum = function(sumArr) {
	let total = 0;
  for (let i=0;i<sumArr.length;i++){
    total += sumArr[i];
  }
  return total;
};

const multiply = function(multiplyArr) {
  let product = 1;
  for (let i=0;i<multiplyArr.length;i++){
    product = product * multiplyArr[i];
  } 
  return product;
};

const power = function(lower,indices) {
	let exponential = lower ** indices;
  return exponential;
};

const factorial = function(num) {
  if (num === 0 || num ===1){
    return 1;
  } 
  for (let i=num-1;i>=1;i--){
    num = num * i;
  }
  return num;
};
console.log(add(2,6));
console.log(subtract(10,4));
console.log(sum([1,3,5,7,9]));
console.log(multiply([2,4,6,8,10,12,14]));
console.log(power(4,3));
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
// npm test calculator.spec.js
const ftoc = function (f) {
  let c = (f - 32) * 5 / 9;
  c = Math.round(c * 10) / 10;
  return c;
};

const ctof = function (c) {
  let f = c * 9 / 5 + 32;
  f = Math.round(f * 10) / 10;;
  return f;
};
console.log(ftoc(-100));
console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
// F to C = [°C] = ([°F] − 32) × 5/9
// C to F =  [°F] = [°C] × 9/5 + 32	
//npm test tempConversion.spec.js
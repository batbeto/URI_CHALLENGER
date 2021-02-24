var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let n = parseInt(lines.shift());
let valueHour = parseInt(lines.shift());
let salaryBase = parseFloat(lines.shift());


let salary = valueHour * salaryBase;

console.log("NUMBER = "+n);
console.log("SALARY = U$ "+ salary.toFixed(2));
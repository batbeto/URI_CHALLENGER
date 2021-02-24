var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let nome = lines.shift("\n");
let salario = parseFloat(lines.shift("\n"));
let totalVendas = parseFloat(lines.shift("\n"));

let salarioTotal = (salario + (totalVendas*0.15));

console.log("TOTAL = R$ "+salarioTotal.toFixed(2));
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let item1 = lines.shift().split(' ');
let item2 = lines.shift().split(' ');


let codigo1 = parseInt(item1.shift());
let nPecas1 = parseInt(item1.shift());
let valorUni1 = parseFloat(item1.shift());

let codigo2 = parseInt(item2.shift(''));
let nPecas2 = parseInt(item2.shift(''));
let valorUni2 = parseFloat(item2.shift(''));

total = (nPecas1*valorUni1)+(nPecas2*valorUni2);
console.log("VALOR A PAGAR: R$ "+total.toFixed(2));


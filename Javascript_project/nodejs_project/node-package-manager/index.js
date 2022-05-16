const lodas = require('lodash');
const bilanganGenap = lodas.partition([1,2,3,4,5,6,7,8], (n) => n % 2 );
console.log(bilanganGenap);
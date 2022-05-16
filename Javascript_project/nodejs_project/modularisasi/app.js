// untuk mengimport module ynag aakan kita gunakan , maka gunakan fungsi require()

const coffe = require('./coffe')
// gunakan object destructurong untuk import nilai yang banyak
const {firstname, lastname} = require('./user')

console.log(firstname);
console.log(lastname);
console.log(coffe);


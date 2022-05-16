/* 
ini konsep ke dua ketika kita akan menjjalankan method event listener , 
cara ini adlah menyingkat dari method on kita , menjadi satu method saja untuk menangani events nya 
yaitu biasanya kita berikan nama listener
**/

const { EventEmitter }  = require('events');
const MyCaffe =  new EventEmitter();

//  buat func untuk print harga dan nama coffe 
const nameCoffe = (name) => {
    console.log(`Coffe ${name} sudah dibuat !`);
}

const priceCoffe = (price) => {
    console.log(`Coffe tersebut harganya adalah ${price}`);
}

//  lalu buatlah listener nya disini 

const coffeListener = ({name , price}) => {
    nameCoffe(name);
    priceCoffe(price);
}

MyCaffe.on('tyas-coffe', coffeListener)

MyCaffe.emit('tyas-coffe', {name : 'Capucino Latte', price : 20000});


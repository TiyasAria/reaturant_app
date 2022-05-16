// kta akan membuat sebuah project yang menerapkan event- listener  ini adalah cara yang pertama 

const { EventEmitter } = require('events');
const MyEvents= new EventEmitter();

//  buatlah sebuah  function untuk menjalankan proses nya 
const makeCoffe = ({name}) => {
    console.log(`Coffe dengan nama ${name} , berhasil dibuat`);

}

//  buat function untuk mencetak hargarnya 

const makePrice = ({price}) => {
    console.log(`Harga coffe tersebut adalah ${price} rupiah`);
}

//  kemudian kita aktifkan menggunakan method on , ketika kita mengaktifkan dengan metod on ada 
//  ada 2 param yang harus kita isi => (nama event yng akan kita buat , function yg akan dijalankan)

MyEvents.on('tyas-coffe', makeCoffe);
MyEvents.on('tyas-coffe', makePrice);

//  lalu untuk membangkitkan sbuah event kita bisa menggunakn method emit (bahasa gampangnya untuk menambahkan value ke listenernya)

MyEvents.emit('tyas-coffe' , {name : 'Torabika susu' , price : 7000 });




// file sistem inilah yg berfungsi untuk melihat secara sycn dan asycn , dan menajaga keamanan file didalam komputer 

const fs = require('fs');

const readFuncCallback = (data, error) => {
    if(error) {
        console.log(`data error ${error}`);
        return ;
    } else {
        console.log(data);
    }

    
}

//  kemudian untuk mengakses file kita dg method readFile yang dia berfugsi sbg async (tdk urut)
// ketika ingin menggunakan readFile ini kita ada 3 param yg harus di penuhi (lokasi berkas, encoding , fucntion calback)

fs.readFile('note.txt', 'utf-8', readFuncCallback);
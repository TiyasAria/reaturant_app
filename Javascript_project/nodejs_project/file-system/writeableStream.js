const fs = require('fs');

const writeData = fs.createWriteStream('output.txt');

writeData.write(`ini baris bertama \n`);
writeData.write(`ini baris kedua \n`);
writeData.end(`ini the last sudah selesai`);

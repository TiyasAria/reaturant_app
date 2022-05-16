const fs = require('fs');
const path = require('path');


const readData = fs.createReadStream(path.resolve(__dirname, 'input.txt') ,{
     highWaterMark : 15 
});

readData.on('readable', () => {
    try{
            process.stdout.write(`[${readData.read()}]`);
    } catch{
        console.log(`tidak dapat menemukan data`);
    }
});

readData.on('end', () => {
    console.log(`done`)
});

const writeData = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

writeData.write(`Ini baris bertama \n`);
writeData.write(`ini baris kedua ya guys \n`);
writeData.end(`ini the last`);
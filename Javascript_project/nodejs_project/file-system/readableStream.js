const readableSystem = require('fs');

const readData = readableSystem.createReadStream('./note.txt', {
    highWaterMark : 8 
});

readData.on('readable', () => {
    try{
        process.stdout.write(`[${readData.read()}]`);
    } catch{
        console.log(`error data`);
    }
});

readData.on('end' , () => {
console.log(`done`);
})
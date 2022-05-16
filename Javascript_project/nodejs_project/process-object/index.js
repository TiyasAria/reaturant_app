// const message = (name) => {
//     console.log(`Hello ${name}`);
// }

// message('JavaScript');

//  latihan process object
const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
// const environment = process.env.NODE_ENV; 
const environment = process.env.NODE_ENV;

for(let i = 0 ; i <= 10000 ; i++){
    //  looping ini yang akan membuat memori naik 
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment : ${environment}`);
console.log(`pengguanaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// ketika ingin running dibagian process object ini harus pakai cmd bukan powersheel dari vs code 



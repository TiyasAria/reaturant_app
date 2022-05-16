const fs = require('fs');
const path = require('path');

const readNotebook = (error, data) =>{
  if(error){
      console.log(`tidak bisa menampilan data`);
  } 
  else {
      console.log(data);
  }
   
}

fs.readFile(path.resolve(__dirname,'catatan.txt'), 'utf-8', readNotebook)
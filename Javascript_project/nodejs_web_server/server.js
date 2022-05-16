//  hal pertama yang dilakukan adlaah membuat HTTP nya terlebeih dahulu 
const http = require('http');
/*  umunya ketika kite meminta repons ke server maka kita akan menerima 3 tipe response yaitu 
        1.  response header 
        2. response status code 
        3. response body 
*/

const processData = (request, response) => {
        //  sekarang kita akan mengubah respons header nya yg awalny adlh html , kita ubah menjadi application / json 
        //  untuk set header kita bisa menggunakan method setHeader kemudian , selain itu kita akan diminta untuk mengisi 2 param yaitu nama dari header , kemudian jenis/ isi dari header nya 
        //  untuk memberikan nama header sudah ada aturannya , tapi jika kita ingin menamai sendiri kita bisa menggunakan huruf X di depan , kemudian aturan penulisaanya cuper case , kapital di setiap kata dan pemisah nya ada tanda (-)

        response.setHeader('Content-Type', 'application/json');
        response.setHeader('X-Powered-By', 'NodeJS');
  
        //  sekrang kit akan latihan menggunakan method yang ada , didalam kode ini kita akan mencoba berbagai method yang bisa kita gunakan 

        const {url , method} = request;

        if (url === '/') {
                if(method === 'GET'){
                        //  now kita tambahkan  response code bila berhasil atau tdk nya 
                        response.statusCode = 200 ;
                        // sekarang kita akan megubah response body kita yang awalnya adalah HTML kitaubah  menjadi JSON
                        // response.end(`<h1>Ini adalah homepage</h1>`);
                        response.end(JSON.stringify({
                                message : `ini adalah homepage`,
                        }));
                } else {
                         response.statusCode = 400 ;
                        // response.end(`<h1>halaman tidak dapat di akses dengan method ${method}</h1>`)
                        response.end(JSON.stringify({
                                message : `Halaman tidak dapat diakses menggunakan method ${method}`
                        }));
                }

        } else if (url === '/about'){
                if(method === 'GET'){
                        response.statusCode = 200 ; 
                        // response.end(`<h1>Ini adalah halaman about</h1>`);
                        response.end(JSON.stringify({
                                message : `Ini adalah halaman about`
                        }));
                } else if (method === 'POST'){
                        //  untuk membuat var body gunakan let agar bisa di inisialisasi (maksudnya biar datanya nanti bisa di ubah-ubah)
                        let body = [];

                        request.on('data', (chunk)=> {
                                body.push(chunk);
                        });

                        request.on('end', () => {
                                body = Buffer.concat(body).toString();
                                const {name} = JSON.parse(body);
                                response.statusCode = 200 ; 
                                // response.end(`<h1>Hello , ${name} ini adalah halaman about</h1>`);
                                response.end(JSON.stringify({
                                        message : `Halo , ${name} ini adalah halaman about `
                                }));
                        })
                } else {
                        response.statusCode = 400 ; 
                        // response.end(`<h1>Halaman tidak dapat diakses menggunakan method ${method}</h1>`);
                        response.end(JSON.stringify({
                                message : ` Halaman tidak dapat di akses menggunakan method ${method}`
                        }));
                }
        } else {
                 response.statusCode = 404 ;
                // response.end(`<h1>Halaman tidak dapat ditemukan</h1>`);
                response.end(JSON.stringify({
                        message : `Halaman not found`
                }));
        }

        // if (method === 'GET') {
        // response.end(`<h1>halooo Tyas</h1>`);
        // }

        // if (method === 'POST') {
        //         //  inisialisasi trlebih dahulu var kita 
        //         let body = [];

        //         request.on('data', (chunk) => {
        //                 body.push(chunk);
        //         });

        //         request.on('end', ()=> {
        //                 body = Buffer.concat(body).toString();
        //                 //  karena hasil nya masih json string sekrang kita ingin mengubahnya menjadi javascript objet 
        //                 const {name} = JSON.parse(body);
        //                 response.end(`<h1>Halo ${name}</h1>`);

        //         });

        // }

        //  kita komen karen kita ingin focus membuat body request POST 
        // if (method === 'PUT') {
        //         response.end(`<h1>Salam Tiyas</h1>`);
        // }

        // if(method === 'DELETE') {
        //         response.end(`<h1>Salam aria</h1>`)
        // }
        
}

const server = http.createServer(processData);

//  kita akan menggunakan method listen() didlam method ini terdapat 4 param , 
//  - port , - hostname (nama domain) , backlog (maksimal data yg kepending) , - function callback nya  , (ke 4 para ini bersifat opsiaonal )

//  buat port dan juga host nya 
const port = '5000';
const host = 'localhost';

server.listen(port, host , () => {
        console.log(`data berjalan di port ${port} dan dengan domanain ${host}`)
})
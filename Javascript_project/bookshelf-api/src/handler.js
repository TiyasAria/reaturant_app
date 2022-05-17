const { nanoid } = require("nanoid");
const books = require("./book");

const addBooksHandler  = (request , h) => {
     
    //  bua var atau komponen apa saja yang dibutuhkan dalam api kita nanti 
    const {
        name, 
        year,
        author,
        summary, 
        publisher , 
        pageCount , 
        readPage, 
        reading 
    } = request.payload ;

    const id = nanoid(16); 
    const finished  = pageCount === readPage; 
    const insertedAt = new Date().toISOString();
    const updateAt = insertedAt; 

    //  setelah kita buat , sekrang kita masukan kedalam arry books kita 
    const newBooks = {
        name,
        year,
        author,
        summary, 
        publisher, 
        pageCount, 
        readPage,
        reading,
        id,
        finished,
        insertedAt , 
        updateAt
    };

    if (name === undefined) {
        const response = h.response({
            status : 'fail',
            message : 'Gagal menambahkan buku. Mohon isi nama buku',
        }); 

        response.code(400);
        return response;
    } 

    if (readPage > pageCount){
        const response = h.response({
            status : 'fail', 
            message : 'Gagal menambahkan buku.Readpage tidak boleh lebih besar dari pageAccount',
        }); 

        response.code(400);
        return response ; 
    } 
    

    books.push(newBooks);

    // selanjutnya kita akan membuat filter by id nya 
    const isSuccess = books.filter((book) => book.id === id).length > 0 ;
    
    if (isSuccess) {
        const response = h.response({
            status : 'success',
            message : 'Buku berhasil ditambahkan',
            data : {
                bookId :  id 
            }
        }); 

        response.code(201);
        return response; 
    } 


    const response = h.response({
        status : 'errorr', 
        message : 'Buku gagal ditambahkan'
    });

    response.code(500);
    return response;

};

const getAllBooksHandler = (request , h) => {
    //  ini untuk menambahkan fitur optional yang query 
    const {  name , reading , finished } = request.query ;
    let filteredBook = books;
    if(name !== undefined){
         filteredBook = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    };

    if (reading !== undefined){
         filteredBook = books.filter((book) => Number(book.reading) === Number(reading))
    };

    if(finished !== undefined){
         filteredBook = books.filter((book) => Number(book.finished) === Number(finished));
    }


    return h.response({
        status : 'success' , 
        message : 'Data berhasil di dapatkan',
        data : {
            books : filteredBook.map((book) => ({
                id : book.id, 
                name : book.name , 
                publisher : book.publisher, 
            }))
        }
    })
}; 

const getDetailHandler = (request , h) => {
    //   tambahkan fitur untuk  menambahkan param 
    const {bookId} = request.params; 
    const filteredBook = books.filter((n)=> n.id === bookId)[0];

    if(filteredBook !== undefined){
        return {
           status : 'success', 
           message : 'data berhasil didapatkan',
           data : {
               filteredBook
           }
        }
    }; 
    const response = h.response ({
        status : 'fail', 
        message : 'Data gagal didapatkan'
    });
    response.code(400)
    return response ; 
}; 

const updateDataBookHandler = (request, h) => {
    const {bookId} = request.params; 

    const { 
        name , 
        year ,
         author , 
         summary, 
         publisher , 
         pageCount, 
        readPage, 
        reading
    } = request.payload ; 

    const finished = pageCount === readPage ; 
    const updateAt = new Date().toISOString(); 

    if (name === undefined ){
        const response = h.response({
            status : 'fail', 
            message : 'Gagal memperbarui buku. Mohon isi nama buku',
        });

        response.code(400) ;
        return response ; 
    }; 

    if (readPage > pageCount ){
        const response = h.response({
            status : 'fail', 
            message : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        }); 

        response.code(400) ; 
        return response ; 
    }

    //  now kita dapatkan dulu index id mana yang akan kita update 
    const index = books.findIndex((books) => books.id === bookId);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name , 
            year ,
            author , 
            summary, 
            publisher , 
            pageCount, 
            readPage, 
            reading, 
            finished , 
            updateAt
        }; 
         const response = h.response({
             status : 'success' , 
             message : 'Berhasil mengupdate buku'
         });
         response.code(200); 
         return response 
    }

     const response = h.response({
         status : 'fail', 
         message : 'gagal mengupdate data'
     }); 
     response.code(404); 
     return response ; 

};

const deleteBooksHandler = (request , h) => {
    const {bookId}= request.params; 

    const index = books.findIndex((books) => books.id === bookId) ;
    if (index !== -1) {
        books.splice(index, 1);
        const response   = h.response({
            status : 'success', 
            message : 'Data berhasil di hapus',
        });
        response.code(200)
        return response;
    }

     const response = h.response ({
         status : 'fail', 
         message : 'Data tidak berhasil dihapus, id tidak ditemukan',
     });

     response.code(404);
     return response;

}



module.exports = {
    addBooksHandler, 
    getAllBooksHandler, 
    getDetailHandler, 
    updateDataBookHandler, 
    deleteBooksHandler
}
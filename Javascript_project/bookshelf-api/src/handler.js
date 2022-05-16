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

const getAllBooksHAndler = (request , h) => {
    //  ini untuk menambahkan fitur optional yang query 
    const {  name , reading , finished } = request.query ;
    const filteredBook = books.filter((a) => {
        if(name) return a.name.toLowerCase().include(name.toLowerCase());
        if(reading) return (reading === '1' || reading === '0') ? a.reading === (reading === '1') : a ;
        if(finished) return (finished === '1' || finished === '0') ? a.finished === (finished === '1') : a ;
    }) ; 
    return h.response({
        status : 'success' , 
        message : 'Data berhasil di dapatkan',
        data : filteredBook.map((book) => ({
            id : book.id, 
            name : book.name , 
            publisher : book.publisher, 
        }))
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
    response.code = 400
    return response ; 
}



module.exports = {
    addBooksHandler, 
    getAllBooksHAndler
}
const { addBooksHandler, getAllBooksHandler, getDetailHandler, updateDataBookHandler, deleteBooksHandler } = require("./handler");

const routes = [
 {
    method :'POST', 
    path : '/books', 
    handler : addBooksHandler
 }, 
 {
    method :'GET', 
    path : '/books', 
    handler : getAllBooksHandler,
 }, 
 {
    method :'GET', 
    path: '/books/{bookId}',
    handler : getDetailHandler,
 }, 
 {
    method :'PUT', 
    path : '/books/{bookId}', 
    handler : updateDataBookHandler, 
 }, 
 {
    method :'DELETE', 
    path : '/books/{bookId}', 
    handler : deleteBooksHandler, 
 }
];

module.exports = routes;
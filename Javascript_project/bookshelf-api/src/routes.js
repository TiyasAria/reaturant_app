const { addBooksHandler, getAllBooksHAndler } = require("./handler");

const routes = [
 {
    method : 'POST', 
    path : '/books', 
    handler : addBooksHandler
 }, 
 {
    method : 'GET', 
    path : '/books', 
    handler : getAllBooksHAndler
 }, 
 {
    method : 'GET', 
    path: '/books/{bookId}',
    handler : () =>{},
 }
];

module.exports = routes;

//  disinilah file yang akan berisi routing kita 
const route = [
    {
        method : 'GET',
        path : '/', 
        handler : (request , h) => {
            return `Homepage`;
        }
    },
    {
        method : '*', 
        path : '/', 
        handler : (request, h) => {
            return `Halam tidak dapat di akses menggunakan method tsb` ;
        }
    },
    {
        method : 'GET',
        path : '/about', 
        handler : (request , h) => {
            return `ini adalah hamalan about`;
        }
    },
    {
        method : '*', 
        path : '/about', 
        handler : (request , h) => {
            return `Halaman tidak dapat diakses menggunakan method tsb`;
        }
    },
    //  disni kita akan mencoba untuk path parameter , 
    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request , h) => {
            const {name = `stranger`} = request.params; 
            //  sekrang kita akan membuat query param , 
            const {lang} = request.query ;
            if (lang == 'id'){
                return `Hello ${name}, i come from indonesia `
            } else {
                return `Hello ${name} and i another indonesia `
            }
          
        }
    },
    {
        method : '*', 
        path : '/{any*}', 
        handler : (request , h) => {
            return ` Halaman 404 `;
        }
    }
];

module.exports = route; 
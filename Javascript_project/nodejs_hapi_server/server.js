const Example = require('@hapi/hapi');
const route = require('./routes')
//  make var init yang dia itu dalam nya func asynch yang didalamnya nanti ada server kita 
const init = async () => {
    const server = Example.server({
        port : '5000',
        host : 'localhost',
    });

    server.route(route);

    await server.start();
    console.log(`server berjalan di ${server.info.uri}`);

};

init();
const { io } = require('../server');

// Se ejecuta cuando un usuario se conecta. El objeto client contiene todos los datos del equipo que se ha conectado
io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
        /*if(mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'ALGO SALIO MAL'
            });
        }*/
    })
});
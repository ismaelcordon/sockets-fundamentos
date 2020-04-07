
let socket = io();

// Escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Conexión perdida');
});

// Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Ismael',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('respuesta server: ', resp)
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});
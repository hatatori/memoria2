const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Servindo o arquivo HTML do cliente
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Escuta mensagens do cliente
    socket.on('chat message', (msg) => {
        console.log('Message: ' + msg);
        io.emit('chat message', msg); // Envia a mensagem para todos os clientes
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
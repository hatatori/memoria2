const path = require('path');

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const port = 3000

// info game
const gameData = []

// socket

const io = new Server(server);

io.on('connection', (socket) => {

    // first time
    socket.on('connect room', (msg) => {
        gameData.push(JSON.parse(msg))

        console.log('conected')
        console.log(gameData)

        io.emit('connect room', 'verificado');
    });

    socket.on('flip', (msg) => {
        const json = JSON.parse(msg)

        if (gameData.find(e => e.id != json.id)) {
            console.log('usuario não existe')
            return
        }

        gameData.find(e => e.id == json.id).binary = json.binary
        gameData.find(e => e.id == json.id).pos = json.pos

        const data = gameData.find(e => e.id == json.id)
        const obj = JSON.stringify(data)
        // console.log(data.binary)

        io.emit('_flip', obj);
    });

    socket.on('flop', (msg) => {

        const json = JSON.parse(msg)

        if (gameData.find(e => e.id != json.id)) {
            console.log('usuario não existe')
            return
        }

        gameData.find(e => e.id == json.id).binary = json.binary
        gameData.find(e => e.id == json.id).pos = json.pos

        const data = gameData.find(e => e.id == json.id)
        const obj = JSON.stringify(data)
        // console.log(data.binary)

        io.emit('_flop', obj);

    });


    socket.on('changedeck', msg => {
        //     console.log('changedeck')
        const json = JSON.parse(msg)
        console.log(json)
        
        gameData.find(e => e.id == json.id).board36 = json.board36
        gameData.find(e => e.id == json.id).binary = json.binary
        
        const data = JSON.stringify(gameData.find(e => e.id == json.id))
        console.log(data)

        io.emit('_changedeck', data)
        // socket.emit('changedeck', 'vai')
    })

    // first time
    // socket.on('enter room', (msg) => {
    // gameData.push(gameData)
    // io.emit('connect room', 'verificado');
    // });

    // disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    // console.log('A user connected');
    // console.log(gameData);
});




// server

app.use(express.static(path.join(__dirname, '../frontend/src')));

app.get('/game=:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
});


app.get('/status/:id', (req, res) => {
    const obj = gameData.find(e => e.id == req.params.id)
    res.json(obj)
    // res.json(gameData.find(e=>e.id==req.params.id))
});

// app.get('/game=:id', (req, res) => {
// const id = req.params.id
// gameData.push()
// res.json({status: req.params.id})
// res.end('ok')
// res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
// });

// app.post('/create', (req, res) => {
//     // const { nome, mensagem } = req.body;
//     // res.json({
//     //     mensagem: `Olá, ${nome}! Sua mensagem foi recebida: "${mensagem}"`,
//     // });

//     const currentTime = Date.now()
//     const newId = currentTime.toString(36)
//     gameData.push({id: newId})

//     console.log(`Seu novo id é: ${newId}`)
//     console.log(gameData)

//     res.json({ id: newId });

// });

// Inicia o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

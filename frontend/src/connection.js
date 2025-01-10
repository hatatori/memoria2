const socket = io();

// const form = document.getElementById('form');
// const input = document.getElementById('input');
// const messages = document.getElementById('messages');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (input.value) {
//         socket.emit('chat message', input.value); // Envia mensagem ao servidor
//         input.value = '';
//     }
// });

socket.on('connect room', (msg) => {
    console.log(msg)
});

socket.on('_flip', (msg) => { flipCard(JSON.parse(msg).pos) });
socket.on('_flop', (msg) => { flopCard(JSON.parse(msg).pos) });



socket.on('_changedeck', msg => {

    const json = JSON.parse(msg)
    console.log('board')
    console.log(json.board)

    if(json.board36 == board36()) return

    const cardsItem = Array.from(document.querySelectorAll(".card-item"))
    for (let i = cardsItem.length - 1; i >= 0; i--) {
        removeCard(i)
    }
    
    

    setTimeout(() => {
        decreaseSizeCardsNames36(json.board36)
        showAll()
    }, 400)

    // console.log(json.board)
})

// alert('ok')
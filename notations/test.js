//  POST - playfriend

// 1. criar uma sala - POST
[
    {
        'id': 'aUZ4FuV0SF0',
        'board': '1c wo rx 16t 9d 19a 34 15j du j1',
        'user': 'Clara',
    },
    
]

// 2. usuário entra na página - POST
// payload
[
    {
        'id': 'aUZ4FuV0SF0',
        'user': 'Gabriela'
    }
]
// response
[
    {
        'id': 'aUZ4FuV0SF0',
        'board': '1c wo rx 16t 9d 19a 34 15j du j1',
        'user': 'Clara',
    }
];

// 3. uma jogada é jogadas - POST
[
    { 'id': 'aUZ4FuV0SF0', 'userA': 'Clara', 'position': 3, 'binary': '001100100' },
    { 'id': 'aUZ4FuV0SF0', 'userA': 'Clara', 'position': 4, 'binary': '001110100' },
]





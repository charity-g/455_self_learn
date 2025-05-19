#

need 
- index.html
- websocket server

# websocket server
`npm init -y`

`npm i ws` # install websocket package `ws`

# set up websockets in `index.js`
- const WebSocket = require('ws');
- const wss = new WebSocket.Server({ port: 8082 });
- wss.on('connection', fn) 

# set up websocket connector in `index.html`
- <script> {content} </script>
- const ws = new WebSocket('ws://localhost:8082'); // note must be same as 
- ws.addEventListener('open', fn });

BTS:
- client sends https request, and then asks for upgrade for websocket handshake
- server says yes, handshake complete

# sending messages
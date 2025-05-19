const WebSocket = require('ws');

// Start up a websocket server
const wss = new WebSocket.Server({ port: 8082 });

// Listen for clients which connect to the server
// listens for events = which is 'connection' 
wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', data => {
        console.log(`Received message: ${data}`);
        // Echo the message back to the client
        ws.send(`Server received: ${data}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
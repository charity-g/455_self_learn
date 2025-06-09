
// built in globals
// npm i --save-dev nodemon => allows server to restart automatically on changes
// edit package.json to add "devStart": "nodemon index.js" under scripts

// accessible anywhere
global.luckyNum = 12;
console.log(global.luckyNum)

// process = access to the current running process 
console.log(process.platform);

// NODE IS NON-BLOCKING 
// A lot of callbacks
process.on('exit', () => {console.log('Process is exiting...')});


// Event Emitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('ask for sushi', () => {
    console.log('here is your sushi!');
}); 
// Emit the event
eventEmitter.emit('ask for sushi');


// file system
const {readFile, readFileSync} = require('fs');
// readFileSync is blocking
const data = readFileSync('./data.txt', 'utf-8');
console.log(data);
console.log('This is after calling readFileSync synchronously');
// readFile is non-blocking
readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log('This is after calling readFile asynchronously');

// modules + npm
// modules = js file that exports functionality
// commonjs = require(); es6 = import/export

const myModule = require('./my-module.js');
console.log(myModule);


// express; need npm init and npm install express

const express = require('express');
const app = express();

app.get('/sayhello', (req, res) => {
    res.send('Hello, Express!');
}
);
app.get('/', (req, res) => {
    readFile('./fake_website.html', 'utf-8', (err, html) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(html);
    });
}
);
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Visit http://localhost:${port}/ to see the greeting`);
});

const readFile_promiseVer = require('fs').promises.readFile;

// promises version
app.get('/promise', async (req, res) => {
    res.send(await readFile_promiseVer('./fake_website.html', 'utf8'));
}
);

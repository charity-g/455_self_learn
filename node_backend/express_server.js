const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Visit http://localhost:3000/ to see the greeting');
});


// static public folder
// route '/' will serve the index.html file in the public folder
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


// any html app.get, app.post ..etc
app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
}
);


app.get('/query', (req, res) => {
    console.log(req.query); // Log the query parameters to the console
    res.send('This is a query response');
}
);


app.get('/getJson', (req, res) => {
    res.status(200).send({
        message: 'This is a JSON response',
        status: 'success'
    });
}
);

app.get('/expectError', (req, res) => {
    res.status(500).send('This is an error response');
}
);


app.get('/download', (req, res) => {
    res.download('data.txt') //data.txt should be in the same directory as this file
}
);


//EJS
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/renderFile', (req, res) => {
    res.render('./fake_website.ejs', { title: 'title passed in through node' }) // Ensure you have a view engine set up, e.g., EJS or Pug;
}
);


// EXPRESS ROUTER 
// look in routes/users.js
const usersRouter = require('./routes/users'); // Adjust the path as necessary

// Middleware to log requests
function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next(); 
}

// NOTICE that we are using the logger middleware before the usersRouter
app.use(logger); // Use the logger middleware for all routes

app.use('/users', usersRouter); // Use the users router for any routes starting with /users
// This means that the routes defined in users.js will be accessible under /users

app.get('/test_middle_ware', test_middle_ware, test_middle_ware, (req, res) => {
    res.send('This is a test route');
});

function test_middle_ware(req, res, next) {
    console.log('This is a test middleware prints our twice');
    next(); 
}


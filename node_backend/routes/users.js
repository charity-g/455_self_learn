
const express = require('express');
const router = express.Router();


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

router.get('/', (req, res) => {res.send('Users route')});
router.get('/new', (req, res) => {
    res.render('users/new') // users/view is in views/users/view.ejs
});


// need to add express.urlencoded
router.post('/', (req, res) => {
    const myUsername = req.body.myUsername; // by default, req.body is undefined
    // To parse the body, you need to use a middleware like body-parser or express.json()

    const isValid = true;
    if (!isValid) {
        return res.status(400).send('Invalid user data');
    } else {
        let new_id  = users.length + 1;
        users.push({ id: new_id, name: myUsername });
        res.redirect(`/users/${new_id}`); // Redirect to the users route after creating a new user
    }
    res.send(`User created with username: ${myUsername}`);
    res.redirect('/users/new', {username: req.body.myUsername, email: req.body.email}); // good user experience to autopopulate what they've already seen
});

router.get('/:id', (req, res) => {
    // NOTICE: this will not conflict with the /new route
    // because the /new route is defined before this one
    // and Express will match the routes in the order they are defined
    res.send(`get User with ID: ${req.params.id}`);
}).put('/:id', (req, res) => {
    res.send(`User with ID: ${req.params.id} updated`);
}).delete('/:id', (req, res) => {
    res.send(`User with ID: ${req.params.id} deleted`);
});

router.get('/testrouteBelowId', (req, res) => {res.send('User testrouteBelowId')});

// Middleware to log the match parameter

router.param('id', (req, res, next, id) => {
    console.log(`Match parameter: ${id}`);
    req.user = users[id]
    next(); // Call next() to continue to the next middleware or route handler
});

module.exports = router;
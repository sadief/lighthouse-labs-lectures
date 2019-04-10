// Require in our npm packages to use
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Initialise express
const app = express()

// Set body parser to translate form data
app.use(bodyParser.urlencoded({ extended: true }))

// Added morgan as a logger 
app.use(morgan('dev'));
app.set('view engine', 'ejs')

// Cow DB
const cows = {
    "40d": {
        name: "Missy",
        img: "/url"
    },
    "39a": "Simon",
    "a4r": "Beefy",
}

// Serves up homepage with all of the cows
// Reads all cows
app.get('/cows', (req, res) => {
    let templateVars = {
        cows: cows
    }
    res.render('index', templateVars)
})

// Serve up Create cow page
app.get('/cows/new', (req, res) => {
    res.render('create_cow')
})

// Creates a cow
app.post('/cows', (req, res) => {
    cows[req.body.id] = req.body.name
    res.redirect('/cows')
})

// Reading one cow
app.get('/cows/:id', (req, res) => {
    let templateVars = {
        id: req.params.id,
        name: cows[req.params.id]
    }
    res.render('cow', templateVars)
})

// Update a cow's name
app.post('/cows/:id', (req, res) => {
    if (req.body.name) {
        cows[req.params.id] = req.body.name
    }
    res.redirect(`/cows/${req.params.id}`)
})

// Delete a cow (send it to a nice farm with lots of grass)
app.post('/cows/:id/delete', (req, res) => {
    delete cows[req.params.id]
    res.redirect('/cows')
})

// Just checkin we got cows
console.log("HELLO COW WORLD")

// Listening on port 3000 for HTTP requests
// I added in the '0.0.0.0' to bind this so that you can access it from any computer at
// <ipv4 address>:3000/cows
app.listen(3000, '0.0.0.0', function () {
    console.log('Listening on port 3000')
})
// We're declaring/importing the packaged that we want to use which we've previously
// Installed using `npm install ...`
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Initialize Express
const app = express()

// Tell the app to use morgan to log HTTP requests
app.use(morgan('dev'))

// Tell the app to use bodyParser to take data from our form
app.use(bodyParser.urlencoded({ extended: true }))

// Tell the app to use EJS as the view engine
app.set('view engine', 'ejs')

// Our cow database
const cows = {
    "40d": "Missy",
    "39a": "Simon",
}

// 'Read' all the cows
app.get('/cows', (req, res) => {
    let templateVars = {
        cows: cows
    }
    res.render('index', templateVars)
})

// Render a create cows page
app.get('/cows/new', (req, res) => {
    res.render('create_cow')
})

// 'Create' a new cow with form input data by adding it to the 'cow database'
app.post('/cows', (req, res) => {
    cows[req.body.id] = req.body.name
    res.redirect('/cows')
})

// 'Read' one cow based on it's id
app.get('/cows/:id', (req, res) => {
    let templateVars = { id: req.params.id, name: cows[req.params.id] }
    res.render('cow', templateVars)
})

// 'Update' a cow's name based on it's id and form input data
app.post('/cows/:id', (req, res) => {
    // Check that we aren't just deleting the name by overriding it with an empty string
    if (req.body.name !== '') {
        cows[req.params.id] = req.body.name
    }
    res.redirect(`/cows/${req.params.id}`)
})

// 'Delete' a cow based on it's id and a form submission (really just a button, but hey)
app.post('/cows/:id/delete', (req, res) => {
    delete cows[req.params.id]
    res.redirect('/cows')

})

// Just checkin' we got some cows in the world
console.log("HELLO COW WORLD")

// Listens for HTTP requests on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000')
})
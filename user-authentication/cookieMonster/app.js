const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const bcrypt = require('bcrypt');
const saltRounds = 12;

app.set('view engine', 'ejs')

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }))

const userDB = {
    1: {
        id: 1,
        username: "echo",
        favCookie: "chocolate",
        password: "meow"
    },
    2: {
        id: 2,
        username: 'Aussie',
        favCookie: 'milkbones',
        password: "crikey"
    },
    3: {
        id: 3,
        username: 'leela',
        favCookie: 'mice-chicken',
        password: 'no'
    }
}

app.get('/', (req, res) => {
    const userID = req.cookies.userID
    res.render('index', { user: userDB[userID] })
})

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = bcrypt.hashSync(req.body.password, saltRounds)

    userDB[4] = { id: 4, username: username, favCookie: 'macaron', password: password }

    res.redirect('/')
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password



    let loggedInUser = null
    for (userID in userDB) {
        const user = userDB[userID]
        if (bcrypt.compareSync(password, user.password)) {
            loggedInUser = user
            break
        }
    }

    if (!loggedInUser) {
        res.send("Not logged in")
        return
    }

    res.cookie('userID', loggedInUser.id)

    res.redirect('/')
})

app.listen(3000, () => console.log("Listening on port 3000"))
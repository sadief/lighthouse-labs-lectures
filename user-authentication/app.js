const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const userDB = {
    1: {
        id: 1,
        username: "Echo",
        favCookie: "chocolate",
        password: "meow"
    },
    2: {
        id: 2,
        username: "Louie",
        favCookie: "oreo",
        password: "miaow"
    },
    3: {
        id: 3,
        username: "Maggie",
        favCookie: "butter",
        password: "woof",
    }
}

app.get("/", (req, res) => {
    const userID = req.cookies.userID
    res.render("index", { user: userDB[userID] })
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let loggedInUser = null
    for (userID in userDB) {
        const user = userDB[userID]
        if (user.username === username && user.password === password) {
            loggedInUser = user;
            break
        }
    }

    if (!loggedInUser) {
        res.send("Not logged in")
        return
    }

    res.cookie("userID", loggedInUser.id)

    res.redirect('/')
})



app.listen(3000, () => console.log("Listening on port 3000"))
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/nasa";
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.log(`Failed to connect: ${MONGODB_URI}`)
        throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`)

    app.get('/people', (req, res) => {
        db.collection("people").find().toArray((err, result) => {
            let templateVars = {
                numberOfPeople: result.length,
                people: result,
            }
            res.render("index", templateVars)
        })
    })

    app.post('/people', (req, res) => {
        let newPerson = {
            name: req.body.name,
            craft: req.body.craft
        }
        db.collection("people").insertOne(newPerson, function (err, id) {
            res.redirect('/people')
        })
    })

    var ObjectId = require('mongodb').ObjectID
    app.post('/people/:id/delete', (req, res) => {
        db.collection('people').deleteOne({ _id: ObjectId(req.params.id) },
            function (err, result) {
                res.redirect('/people')
            })
    })

})



app.listen(3000, () => console.log("Listening on port 3000"))
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/nasa";
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var ObjectId = require("mongodb").ObjectID

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.error(`Failed to connect: ${MONGODB_URI}`);
        throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    app.get('/people', (req, res) => {
        db.collection('people').find().toArray((err, people) => {
            let templateVars = {
                numberOfPeople: people.length,
                people: people,
            }
            res.render('index', templateVars)
        })
    })


    app.post('/people/new', (req, res) => {
        var newPerson = {
            name: req.body.name,
            craft: req.body.craft
        }
        db.collection('people').insertOne(newPerson, function (err, id) {
            res.redirect('/people')
        })
    })


    app.post('/people/:id/delete', (req, res) => {
        db.collection('people').remove({ _id: ObjectId(req.params.id) }, function (err, result) {
            res.redirect('/people')
        })
    })
})

app.listen(3000, () => console.log("Listening on port 3000"))
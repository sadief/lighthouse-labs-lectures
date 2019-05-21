var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
    database: 'got'
})

client.connect()
// const characters = [
//     { id: 1, name: "Ned", castle: "Winterfell" },
//     { id: 2, name: "Arya", castle: "Winterfell" },
//     { id: 3, name: "Sansa", castle: "Winterfell" },
//     { id: 4, name: "Ghost", castle: "Winterfell" },
//     { id: 5, name: "Cersei", castle: "The Red Keep" },
//     { id: 6, name: "Jaime", castle: "The Red Keep" },
//     { id: 7, name: "The Mountain", castle: "The Red Keep" },
//     { id: 8, name: "Margery Tyrell", castle: "Highgarden" }

// ]

const { getCharacters } = require("../data/data-characters")(client)
/* GET home page. */
router.get('/', function (req, res, next) {

    getCharacters((err, chars) => {
        if (err) {
            console.log("ERR:", err)
        } else {
            res.render('index', {
                characters: chars
            });
        }
    })
});

module.exports = router;
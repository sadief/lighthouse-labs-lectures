var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
    database: 'got'
})

client.connect()
const { getCharacters } = require('../data/data-characters')(client);

/* GET home page. */
router.get('/', function (req, res, next) {
    getCharacters((err, chars) => {
        if (err) {
            console.log('ERR:', err)
        } else {
            res.render('index', {
                characters: chars
            })
        }
    })
})

module.exports = router;
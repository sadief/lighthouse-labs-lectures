var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
    database: 'got'
})

client.connect()
const { getCharacterById, updateCharacterById } = require('../data/data-characters')(client);


router.get('/new', function (req, res, next) {
    res.render('character_new');
});

router.post('/', function (req, res, next) {
    res.redirect('/');
});

router.get('/:id/edit', function (req, res, next) {
    getCharacterById(req.params.id, (err, char) => {
        if (err) {
            console.log('ERR:', err)
        } else {
            console.log("Char", char)
            res.render('character_edit', {
                id: char.id,
                name: char.name,
                castle: char.castle
            })
        }
    })
});

router.get('/:id', function (req, res, next) {
    getCharacterById(req.params.id, (err, char) => {
        if (err) {
            console.log('ERR:', err)
        } else {
            res.render('character', {
                id: char.id,
                name: char.name,
                castle: char.castle
            })
        }
    })
});

router.post('/:id/edit', function (req, res, next) {
    updateCharacterById(req.params.id, { castle: req.body.castle }, (err, updatedCharacter) => {
        res.redirect(`/characters/${req.params.id}/edit`);
    })
});

router.post('/:id/delete', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;
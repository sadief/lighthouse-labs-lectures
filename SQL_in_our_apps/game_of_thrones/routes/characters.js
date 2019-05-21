var express = require('express');
var router = express.Router();

const characters = [
    { id: 1, name: "Ned", castle: "Winterfell" },
    { id: 2, name: "Arya", castle: "Winterfell" },
    { id: 3, name: "Sansa", castle: "Winterfell" },
    { id: 4, name: "Ghost", castle: "Winterfell" },
    { id: 5, name: "Cersei", castle: "The Red Keep" },
    { id: 6, name: "Jaime", castle: "The Red Keep" },
    { id: 7, name: "The Mountain", castle: "The Red Keep" },
    { id: 8, name: "Margery Tyrell", castle: "Highgarden" }

]

router.get('/new', function (req, res, next) {
    res.render('character_new');
});

router.post('/', function (req, res, next) {
    res.redirect('/');
});

router.get('/:id/edit', function (req, res, next) {
    let foundCharacter = characters.filter(character => character.id == req.params.id)[0];

    let templateVars = {
        id: req.params.id,
        name: foundCharacter.name,
        castle: foundCharacter.castle
    }
    res.render('character_edit', templateVars);
});

router.get('/:id', function (req, res, next) {
    let foundCharacter = characters.filter(character => character.id == req.params.id)[0];

    let templateVars = {
        id: req.params.id,
        name: foundCharacter.name,
        castle: foundCharacter.castle
    }
    res.render('character', templateVars);
});

router.post('/:id/edit', function (req, res, next) {
    res.redirect(`/characters/${req.params.id}/edit`);
});

router.post('/:id/delete', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;
var express = require('express');
var router = express.Router();

const castles = [
    {
        id: 1,
        name: "Winterfell",
        characters: { "Ned", "Arya", "Sansa", "Jon"}
    },
    {
        id: 2,
        name: "The Red Keep",
        characters: ["Cersei", "Jaime", "The Mountain"]
    },
    {
        id: 3,
        name: "Highgarden",
        characters: ["Margery Tyrell"]
    },
]

router.get('/new', function (req, res, next) {
    res.render('character_new');
});

router.post('/', function (req, res, next) {
    res.redirect('/');
});

router.get('/:id', function (req, res, next) {
    let foundCastle = castles.filter(castle => castle.id == req.params.id)[0];

    let templateVars = {
        id: req.params.id,
        name: foundCastle.name,
        characters: foundCastle.characters
    }
    res.render('character', templateVars);
});

router.get('/:id/edit', function (req, res, next) {
    let foundCastle = castles.filter(castle => castle.id == req.params.id)[0];

    let templateVars = {
        id: req.params.id,
        name: foundCastle.name,
        characters: foundCastle.characters
    }
    res.render('character_edit', templateVars);
});

router.post('/:id/edit', function (req, res, next) {
    res.redirect(`/characters/${req.params.id}`);
});

router.post('/:id/delete', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;
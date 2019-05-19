var express = require('express');
var router = express.Router();

const castles = [
    {
        id: 1,
        name: "Winterfell",
        characters: ["Ned", "Arya", "Sansa", "Jon"]
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
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        castles: castles
    });
});

module.exports = router;
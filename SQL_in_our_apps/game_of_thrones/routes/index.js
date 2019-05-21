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
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        characters: characters
    });
});

module.exports = router;
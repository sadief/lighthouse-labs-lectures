var express = require('express');
var router = express.Router();

const characters = [
    { id: 1, name: "Ned", castle: "Winterfell" },
    { id: 2, name: "Arya", castle: "Winterfell" },
    { id: 3, name: "Sansa", castle: "Winterfell" },
    { id: 4, name: "Ghost", castle: "Winterfell" },
    { id: 5, name: "Cersei", castle: "Winterfell" },
    { id: 6, name: "Jaime", castle: "Winterfell" },
    { id: 7, name: "The Mountain", castle: "Winterfell" },
    { id: 8, name: "Margery Tyrell", castle: "Winterfell" }

]
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        characters: characters
    });
});

module.exports = router;
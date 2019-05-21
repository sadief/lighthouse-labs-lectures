
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

function makeCharactersData(client) {
    function getCharacterById(id, cb) {
        let foundCharacter = characters.filter(char => char.id == id)[0];
        cb(null, foundCharacter)
    }

    function getCharacters(cb) {
        client.query('SELECT * FROM characters', (err, res) => {
            cb(err, res.rows)
        })
    }

    return {
        getCharacterById,
        getCharacters
    }
}

module.exports = makeCharactersData
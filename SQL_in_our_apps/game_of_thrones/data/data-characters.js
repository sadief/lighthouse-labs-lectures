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

function makeCharactersData(client) {

    function getCharacterById(id, cb) {
        client.query('SELECT * FROM characters WHERE id=$1', [id], (err, res) => {
            let found = res.rows[0]
            console.log(res.rows)
            let foundCharacter = {
                id: found.id,
                name: found.name,
                castle: found.castle
            }
            console.log(foundCharacter.name)
            cb(err, foundCharacter)
        })
    }


    function getCharacters(cb) {
        client.query('SELECT * from characters', (err, res) => {
            cb(err, res.rows)
        })
    }

    function updateCharacterById(id, updateData, cb) {
        let castle = updateData.castle
        client.query('UPDATE characters SET castle = $1 WHERE id = $2', [castle, id], (err, res) => {
            console.log(res.rows)
            cb(err, null)
        })
    }

    return {
        getCharacterById,
        getCharacters,
        updateCharacterById
    };
}

module.exports = makeCharactersData;
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        database: 'got'
    }
});

// // SELECT * FROM characters;
// knex.select('*').from('characters').asCallback((err, res) => {
//     console.log(res)
// })

// // SELECT * FROM characters WHERE id = 1;
// knex.select('*').from('characters').where('id', 1).asCallback((err, res) => {
//     console.log(res)
// })

// console.log(knex.select('*').from('characters').toString())

// knex('characters').where({
//     castle: "Winterfell",
// }).select('name').then((res) => {
//     console.log(res)
// })

knex.select('*').from('characters').asCallback((err, res) => {
    res.forEach(character => {
        knex('weapons').where({
            character_id: character.id
        }).select('weapon').then((res) => {
            console.log(character.name, res)
        })
    })
})
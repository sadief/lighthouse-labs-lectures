var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        database: 'got'
    }
});

// SELECT * FROM characers;
// knex.select('*').from('characters').asCallback((err, res) => {
//     if (err) {
//         console.log("Err", err)
//     }
//     console.log(res)
// })

// console.log(knex.select('*').from('characters').toString())


// knex.select('*').from('characters').where('id', 3).asCallback((err, res) => {
//     if (err) {
//         console.log("Err", err)
//     }
//     console.log(res)
// })

// knex('characters').where({
//     castle: "Winterfell"
// }).select('name').asCallback((err, res) => {
//     console.log(res)
// })


knex.select('*').from('characters').asCallback((err, res) => {
    knex('characters').where({
        castle: "Winterfell"
    }).select('name').asCallback((err, res) => {
        res.forEach(character => {
            console.log("Got character", character)
        })
    })
})


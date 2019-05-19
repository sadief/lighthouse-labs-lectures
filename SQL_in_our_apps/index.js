const pg = require('pg');

const config = {
    user: '',
    password: '',
    database: 'lighthouse',
    host: 'localhost',
}

const client = new pg.Client(config)
const queryType = process.argv.slice(2)[0];
let id = null;

if (queryType === "read" || queryType == "delete") {
    id = process.argv.slice(2)[1];
}

client.connect();

if (queryType === "list") {
    client.query("SELECT * FROM movie_villans", (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false;
        }
        console.log(res.rows);
        client.end();
    });
}

if (queryType === "read") {
    client.query("SELECT * FROM movie_villans where id=$1", [id], (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false
        }
        console.log(res.rows);
        client.end();
    })
}

if (queryType === "delete") {
    client.query("DELETE * FROM movie_villans where id=$1", [id], (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false
        }
        console.log(res.rows);
        client.end();
    })
}
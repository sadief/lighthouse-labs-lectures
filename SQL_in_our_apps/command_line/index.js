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

if (queryType === "read" || queryType == "delete" || queryType == "update") {
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
    client.query("DELETE FROM movie_villans where id=$1", [id], (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false
        }
        console.log("Deleted");
        client.end();
    })
}


if (queryType === "create") {
    let name = process.argv.slice(2)[1];
    let movie = process.argv.slice(2)[2];
    client.query("INSERT INTO movie_villans (name, movie) values ($1, $2)", [name, movie], (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false
        }
        console.log(res.rows);
        client.end();
    })
}

if (queryType === "update") {
    let newName = process.argv.slice(2)[2];
    client.query("UPDATE movie_villans SET name=$1 WHERE id=$2", [newName, id], (err, res) => {
        if (err) {
            console.log("ERR:", err);
            return false
        }
        console.log(res.rows);
        client.end();
    })
}
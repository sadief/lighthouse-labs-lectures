Link to [repo](https://github.com/sadief/lighthouse-labs-lectures/tree/may-21-19-sql/SQL_in_our_apps)

Here's some links to things we talks about today, including the postgres-node docs which you'll start to become very familiar with

1. [node-postgres](https://node-postgres.com/)
2. [Error-first Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
3. [Bobby Tables](http://bobby-tables.com/)

Today we looked at how to write SQL inside our applications. We started off by building a command line example that took in some arguments.

The 'pg' module is a Postgres node client that we can use by installing

`npm install pg`

and setting up a config

```js
const { Client } = require('pg')
const client = new Client({
    database: 'got'
})

client.query('SELECT * from characters', (err, res) => {
    console.log(err, res.rows)
})
```

The `command_line` forlder has the code from the CRUD queries we created, and for reference, here's the SQL we used:

## LIST

```sql
SELECT * FROM <db>
```


## READ
```sql
SELECT * FROM <db> WHERE id = $1
```

## CREATE
```sql
INSERT INTO <db> (<column1>, <column2>) VALUES ($1, $2);
```

## UPDATE 
```sql
UPDATE <db> SET <column> WHERE id = $1;
```

## DELETE
```sql
DELETE FROM <db> WHERE id = $1;
```


Inside the app itself we took some queries that were using hardcoded data and refactored them out into helper functions to modularize our app.

We used 'Error first callback' functions to account for the queries running asynchronously.

```js
    function getCharacters(cb) {
        client.query('SELECT * FROM characters', (err, res) => {
            cb(err, res.rows)
        })
    }
```

```js
getCharacters((err, chars) => {
    if (err) {
        console.log("ERR:", err)
    } else {
        res.render('index', {
            characters: chars
        });
    }
})
```

`pg` lets us parameterize the queries with the "$" notation which pulls in a variable. The variable that it pulls in is realated to the index of the array. For this, **the index starts at 1**.

```js
client.query('SELECT * from characters WHERE name = $1', ['Joffrey'], (err, res) => {
    cb(err, res.rows)
})
```

Turns into this:

```js
client.query("SELECT * from artists WHERE name = 'Joffrey'", (err, res) => {
    cb(err, res.rows)
})
```

This will automatically sanitize our inputs to prevent SQL from running any inputs as actual commands. You can check out [Bobby Tables](http://bobby-tables.com/) for reasons not to do this.


Notes and lecture influenced by these lecturers:

[Nima Boscarino](https://web.compass.lighthouselabs.ca/activities/42/lectures/2489)


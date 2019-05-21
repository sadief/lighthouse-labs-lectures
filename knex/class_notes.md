# W2D4 Breakout - Knex

Link to today's [repo](https://github.com/sadief/lighthouse-labs-lectures/tree/may-21-19-knex/knex/knex_demo) 

We talked about how Knex is essentially adding on another layer to our code:

psql -----> Command Line Interaction

pg -------> Node interaction

knex -----> Query builder

Here's some links

1. [Knex Docs](https://knexjs.org/)
2. [Knex Migrations](http://perkframework.com/v1/guides/database-migrations-knex.html)
3. Vaz has [GREAT notes](https://github.com/vaz/knex-demo/) on Knex + Migrations


## Goals

1. Understanding the benefits of Query Building vs. Raw SQL
2. An intro to Knex
3. Migration
    - What are they?
    - Why do they exist?
4. Seeds

### Knex Intro
To use Knex's command-line tools, you'll need to install Knex globally

`npm install --global knex`

and then we install it locally in our app folder

`npm install knex`

and then we can run 

`knex init` 

from our project folder which creates a config file.

Knex allows us to write in what _feels_ like Javascript, but generates to SQL

```js
knex.select('*').from('characters')
```

Generally, pretty much anything that you can do in SQL, you can do with Knex. This includes (but is not limited to):

1. Joins
2. Selects with WHERE clauses
3. Inserts, Updates, Deletes
4. Really any CRUD actions
5. Creating tables
6. Creating foreign keys
7. ... the list goes on!

I would really recommend getting familiar with both raw SQL (working in the psql shell) and writing Knex. Knex will be much more intuitive if you are comfortable with SQL

When you look in the Knex documentation, you'll see that Knex offers both a "Promise" interface, and a "Callback" interface. We haven't discussed Promises yet, so stick with the "Callback" interface by throwing `.asCallback()` at the end of your queries. Take a look in `knex_demo` for examples of this.

### Migrations
Migrations are "version control" for your database schema. In Knex, we initialize a new migration with

```
knex migrate:make <name>
```

in the command line. 

This will generate a file with the skeleton of a migration:

```js
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

You can then edit this file to define the changes that migration will make. In our example we created a table 'animals' with 3 columnds: id, type, size.

We also need to define the 'down' action which will 'revert' our action. In this case, the 'down' drops the 'animals' table.

```js
exports.up = function(knex) {
    return knex.schema.createTable('animals', (table) => {
        table.increments('id')
        table.string('type')
        table.string('size')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('animals');
};
```

 To run all the migrations (up to the most recent), we hop into the command line and run `knex migrate:latest`. We can always roll backwards one version by running `knex migrate:rollback`. Don't worry if you're still a little confused with this, you're going to get real comfortable with migrations when we get to Ruby on Rails!

### Seeding

It's convenient to define a set of data to populate our database. This is called **seed** data. With Knex, we can create a "seed file" by running `knex seed:make <name>` in the command line. This generates a skeleton file where we can define the data we'd like to put into our database.

```js
// kanye/seeds/seeds.js
// My example of a seed file
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { type: 'dog' },
        { type: 'cat' },
        { type: 'hamster' }
      ]);
    });
};
```

In the example above, notice that the first thing that happens is `knex('animals').del()`. This command deletes all the entries in the 'animals' table without dropping the table. Then we proceed with a bulk insert objects.

This seed file is just a specification, however. To actually *run* the seeds and populate the database, we use the command-line tool.

```
knex seed:run
```


Here's some other lecturer's notes that are great to check out:

-[Vaz's demo](https://github.com/vaz/knex-demo/)
-[Karl's notes](https://github.com/jensen/knex-notes/)




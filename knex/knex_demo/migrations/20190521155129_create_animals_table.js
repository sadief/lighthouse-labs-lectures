
exports.up = function (knex, Promise) {
    return knex.schema.createTable('animals', (table) => {
        table.increments('id')
        table.string('type')
        table.string('size')
    })
    // Make the change

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('animals')
    // Revert the change 
};


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        { id: 1, type: 'cat' },
        { id: 2, type: 'hamster' },
        { id: 3, type: 'goose' }
      ]);
    });
};

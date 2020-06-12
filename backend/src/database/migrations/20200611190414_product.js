
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.integer('id').primary();
      table.string('name').notNullable();
      table.decimal('price').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};

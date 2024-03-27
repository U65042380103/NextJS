/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('products',function(table){
        table.integer('products_id',8).primary().notNullable().unsigned();
        table.string('products_name',100).notNullable();
        table.float('products_price',).notNullable().unsigned();
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('products')
};

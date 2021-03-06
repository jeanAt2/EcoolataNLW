import Knex from  'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(Knex: Knex){
    // VOLTAR ATRAS
    return Knex.schema.dropTable('items');
}
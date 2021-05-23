import {Knex} from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('USERINFO', (table) => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.string('street', 50).notNullable();
    table.string('number', 5).notNullable();
    table.integer('id_state').references('id').inTable('STATES').notNullable();
    table.integer('id_city').references('id').inTable('CITY').notNullable();
    table.integer('id_user').references('id').inTable('USERS').notNullable();
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('USERINFO');

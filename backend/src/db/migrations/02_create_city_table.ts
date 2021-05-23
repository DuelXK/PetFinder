import {Knex} from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('CITY', (table) => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.integer('id_state').references('id').inTable('STATES');
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('CITY');

import {Knex} from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('STATES', (table) => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.integer('uf', 2).notNullable();
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('STATES');

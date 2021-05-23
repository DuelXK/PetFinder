import {Knex} from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('USERS', (table) => {
    table.increments('id').primary();
    table.string('email', 50).notNullable().unique();
    table.string('password', 50).notNullable();
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('USERS');

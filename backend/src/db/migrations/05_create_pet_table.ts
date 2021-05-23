import {Knex} from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('PETS', (table) => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.string('breed', 50).notNullable();
    table.string('uuid', 50).notNullable();
    table.float('weight', 50).notNullable();
    table.integer('id_city').references('id').inTable('CITY').notNullable();
    table.integer('id_userInfo').references('id').inTable('USERINFO').notNullable();
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('PETS');

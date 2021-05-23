import {Knex} from 'knex';

export async function seed(knex: Knex): Promise<void> {
  const states = [
    {name: 'SAO PAULO', uf: 'SP'},
    {name: 'RIO DE JANEIRO', uf: 'RJ'},
    {name: 'PARANA', uf: 'PR'},
    {name: 'SANTA CATARINA', uf: 'SC'},
    {name: 'RIO GRANDE DO SUL', uf: 'RS'},
  ];
  await knex.insert(states).into('STATES');
}

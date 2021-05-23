import {Knex} from 'knex';

export async function seed(knex: Knex): Promise<void> {
    const cities = [
        {name: 'HORTOLANDIA', id_state: 1},
        {name: 'CAMPINAS', id_state: 1},
        {name: 'RIO DE JANEIRO', id_state: 2},
        {name: 'ARRAIAL DO CABO', id_state: 2},
        {name: 'CURITIBA', id_state: 3},
        {name: 'PINHAIS', id_state: 3},
        {name: 'FLORIANOPOLIS', id_state: 4},
        {name: 'JOINVILLE', id_state: 4},
        {name: 'GRAMADO', id_state: 5},
        {name: 'PORTO ALEGRE', id_state: 5},
    ];
    await knex.insert(cities).into('CITY')
}
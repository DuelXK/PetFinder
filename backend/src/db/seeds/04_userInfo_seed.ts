import {Knex} from 'knex';

export async function seed(knex: Knex): Promise<void> {
  const userInfo = [
    {
      name: 'Gabriel',
      street: 'RUA DOS CAMPOS',
      number: '236',
      id_state: 1,
      id_city: 1,
      id_user: 1,
    },
    {
      name: 'Miguel',
      street: 'RUA DAS ROSAS',
      number: '91',
      id_state: 2,
      id_city: 2,
      id_user: 2,
    },
    {
      name: 'Geovana',
      street: 'AVENIDA DA SAUDADE',
      number: '5',
      id_state: 3,
      id_city: 3,
      id_user: 3,
    },
    {
      name: 'Marcello',
      street: 'RUA ITALIA',
      number: '398',
      id_state: 4,
      id_city: 4,
      id_user: 4,
    },
    {
      name: 'Cleiton',
      street: 'AVENIDA IPIRANGA',
      number: '62',
      id_state: 5,
      id_city: 5,
      id_user: 5,
    },
  ];
  await knex.insert(userInfo).into('USERINFO');
}

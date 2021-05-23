import {Knex} from 'knex';

import {v4} from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  const pets = [
    {
      name: 'Beto',
      breed: 'Husky Siberiano',
      weight: 35.5,
      id_city: 1,
      id_userInfo: 1,
      uuid: v4(),
    },
    {
      name: 'Rex',
      breed: 'Rottweiler',
      weight: 40,
      id_city: 1,
      id_userInfo: 1,
      uuid: v4(),
    },
    {
      name: 'Kings',
      breed: 'Pastor-Alemão',
      weight: 43.2,
      id_city: 2,
      id_userInfo: 2,
      uuid: v4(),
    },
    {
      name: 'Neos',
      breed: 'Shar Pei',
      weight: 70,
      id_city: 2,
      id_userInfo: 2,
      uuid: v4(),
    },
    {
      name: 'Kodaf',
      breed: 'Pinscher',
      weight: 6,
      id_city: 3,
      id_userInfo: 3,
      uuid: v4(),
    },
    {
      name: 'Randow',
      breed: 'Pug',
      weight: 12,
      id_city: 3,
      id_userInfo: 4,
      uuid: v4(),
    },
    {
      name: 'Zero',
      breed: 'Buldogue',
      weight: 31,
      id_city: 4,
      id_userInfo: 5,
      uuid: v4(),
    },
    {
      name: 'Jacks',
      breed: 'Chihuahua',
      weight: 8,
      id_city: 5,
      id_userInfo: 5,
      uuid: v4(),
    },
  ];
  await knex.insert(pets).into('PETS');
}

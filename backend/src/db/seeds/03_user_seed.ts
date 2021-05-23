import {Knex} from 'knex';
import bcrypt from 'bcrypt'
import config from '../../config'

export async function seed(knex: Knex): Promise<void> {
  const users = async () => await Promise.all([
    {email: 'gabriel@hotmail.com', password: await bcrypt.hash('mecontrata', config.salt)},
    {email: 'miguel@hotmail.com', password: await bcrypt.hash('microsoft', config.salt)},
    {email: 'geovana@gmail.com.br', password: await bcrypt.hash('darkside', config.salt)},
    {email: 'marcello@gmail.com', password: await bcrypt.hash('google', config.salt)},
    {email: 'cleiton@uol.com.br', password: await bcrypt.hash('compasso', config.salt)},
  ]); 
  await knex.insert(await users()).into('USERS');
}

import knex from 'knex';

import { database } from '../config';

const connection = knex(database[process.env.NODE_ENV || 'development']);

export default connection;
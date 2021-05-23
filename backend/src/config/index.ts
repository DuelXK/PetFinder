import _database from './database';

export default {
  port: process.env.PORT || 8080,
  salt: process.env.SALT || 10,
};

export const database = _database;

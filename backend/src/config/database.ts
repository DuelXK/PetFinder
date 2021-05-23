import path from 'path';

const envs = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join('dev.sqlite3'),
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: path.join('test.sqlite3'),
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
    useNullAsDefault: true,
  },
};

export default envs;

import path from 'path';

import {Knex} from 'knex';

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve('data', 'db.sqlite3'),
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: 'src/lib/db/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: 'src/lib/db/seeds',
  },
};

export default config;

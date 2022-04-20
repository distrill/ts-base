import knex from 'knex';
import config from '../../config/db.config';

export default async () => {
  return knex(config);
};

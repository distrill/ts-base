import knex from 'knex';
import config from '../../config/db';

export default async () => {
  return knex(config);
};

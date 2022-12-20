import knex, {Knex} from 'knex';
import config from '../../config/db.config';

export async function initDb(): Promise<Knex> {
  return knex(config);
}

import {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('hello', (t) => {
    t.string('world');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('hello');
}

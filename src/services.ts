import {Knex} from 'knex';

export type TModels = {};

export type TServices = {
  lib: {
    db: Knex;
  };
  models: TModels;
};

export default async function init({db}: {db: Knex}): Promise<TServices> {
  return {
    lib: {db},
    models: {},
  };
}

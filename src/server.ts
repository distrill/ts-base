import initDb from './lib/db';
import initServices from './services';
import logger from './lib/logger';
import logEvents from './lib/logger/events';

async function run() {
  const db = await initDb();
  const services = await initServices({db});

  logger.info(
    'this is the hook'
  );
}

run()
  .catch((err) => console.error('ERRR', err));

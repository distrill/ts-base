import initDb from './lib/db';
import initRoutes from './routes';
import initServices from './services';
import logger from './lib/logger';
import express from 'express';

async function run() {
  const db = await initDb();
  await initServices({db});

  const port = 3000;
  const app = express();

  const routes = await initRoutes();
  app.use(routes);

  app.listen(port, () => {
    logger.info('webserver listening', {port});
  });
}

run()
  .catch((err) => console.error('ERRR', err));

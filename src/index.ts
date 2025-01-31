import EventEmitter from 'events';
import {ApplicationConfig, LoopbackPgApplication} from './application';
import {PgDataSource} from './datasources/pg.datasource';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackPgApplication(options);

  await app.boot();
  await app.start();

  const pgDataSource = new PgDataSource();
  await pgDataSource.connect();

  // attach the newly created datasource to the app
  app.dataSource(pgDataSource);

  await app.migrateSchema();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  // Decrease the default max listeners from 10 to 3 to reproduce memory leak warning
  EventEmitter.defaultMaxListeners = 3;

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST || '127.0.0.1',
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}

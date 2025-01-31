/**
 * the database config
 */
export const pgDbConfig = {
  name: 'pg',
  connector: 'postgresql',
  url: `postgres://postgres:1234@localhost/postgres`,
  min: 2,
  max: 10,
  lazyConnect: true,
  afterConnect: (connection: any) => {
    console.log('DB connected', connection);
  },
  onError: (dbError: Error) => {
    console.log('Error in DB connection %o', dbError);
  },
};

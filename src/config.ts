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
  onError: (dbError: Error) => {
    console.log('Error in DB connection %o', dbError);
  },
};

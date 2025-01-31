import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {pgDbConfig} from '../config';

/**
 * the server postgres sql data source
 */
export class PgDataSource extends juggler.DataSource {
  static dataSourceName = 'pg';

  constructor(
    @inject('datasources.config.pg', {optional: true})
    dsConfig: object = pgDbConfig,
  ) {
    super(dsConfig);
  }

  async disconnect() {
    return super.disconnect();
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources/pg.datasource';
import {News, NewsRelations} from '../models';

export class NewsRepository extends DefaultCrudRepository<
  News,
  typeof News.prototype.id,
  NewsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(News, dataSource);
  }
}

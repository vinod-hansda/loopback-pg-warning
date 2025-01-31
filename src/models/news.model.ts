import {Entity, model, property} from '@loopback/repository';

@model()
export class News extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  created: string;


  constructor(data?: Partial<News>) {
    super(data);
  }
}

export interface NewsRelations {
  // describe navigational properties here
}

export type NewsWithRelations = News & NewsRelations;

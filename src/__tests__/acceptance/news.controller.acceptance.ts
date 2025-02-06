import {Client} from '@loopback/testlab';
import {LoopbackPgApplication} from '../..';
import {setupApplication} from './test-helper';

describe('NewsController', () => {
  let app: LoopbackPgApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  // test should create a new news item
  it('invokes POST /news', async () => {
    const promises = [];
    for (let i = 0; i < 100; i++) {
      promises.push(client.post('/news').send({
        "content": "string",
        "created": "2025-02-06T15:52:45.209Z",
      }).expect(200));
    }
    // wait for all promises to resolve
    await Promise.all(promises);
  });
});

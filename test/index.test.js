'use strict';

const micro = require('micro');
const listen = require('test-listen');
const got = require('got');
const qs = require('query-string');

const serviceHandler = require('../src');

describe('moa generator service', () => {
  let service;
  let url;

  beforeAll(async () => {
    service = micro(serviceHandler);
    url = await listen(service);
  });

  afterAll(() => {
    service.close();
  });

  it('responds 200 with correct headers', async () => {
    const response = await got(url);

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toBe('image/svg+xml');
    expect(response.headers['cache-control']).toBe('public,s-maxage=3600');
  });

  it('responds 400 when url is invalid', async () => {
    expect.assertions(1);

    const invalidUrl = `${url}/path`;
    try {
      await got(invalidUrl);
    } catch (error) {
      expect(error.response.statusCode).toEqual(400);
    }
  });

  it('correctly handles query params', async () => {
    const query = qs.stringify({
      size: '500',
      name: 'Excellence',
      receiver: 'Test'
    });
    const response = await got(`${url}?${query}`);
    expect(response.body).toMatchSnapshot();
  });
});

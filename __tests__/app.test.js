const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it('/games should return a list of games', async () => {
    const res = await request(app).get('/games');

    const expected = [{
      id: '4',
      name: 'BorderLands',
      type: 'Action',
      year: 2015,
    },
    {
      id: '2',
      name: 'Gears Of War',
      type: 'Action',
      year: 2006
    }
  
    ];
    console.log(res.body);
    expect(res.body[1]).toEqual(expected[1]);
  });

  it('/games/:id should return game details', async () => {
    const res = await request(app).get('/games/1');
    const Halo = [{
      id: '1',
      name: 'Halo',
      type: 'Action',
      year: 2000
    }];
    expect(res.body).toEqual(Halo);
  });

  afterAll(() => {
    pool.end();
  });
});













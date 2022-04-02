import { filterData } from '../src/data.js';
// import data from '.src/data/ghibli/ghibli.js';

const YEAR =  [
  { "release_date": "1986",
  },
  {"release_date": "1988",
  }
]

describe('function Filter Data', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `filterData by year`', () => {
    expect(filterData(YEAR)).toBe('1986,1988');
  });
});


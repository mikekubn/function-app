import { unique } from '.';

const _arr_mock_duplicite = ['A', 'B', 'A', 'C', 'B', 'C', 'B', 'C', 'B', 'A'];

describe('1c unique', () => { 
  it('array of string', () => {
    const uniq = unique<string>(_arr_mock_duplicite);

    expect(uniq).toEqual([ 'A', 'B', 'C' ]);
    expect(uniq).not.toEqual([]);
  });
});
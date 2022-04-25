import { duplicate } from '.';

const _arr_mock_number = [1, 2, 3];
const _arr_mock_string = ['1', '2', '3'];

describe('1a duplicate', () => { 
  it('array of number', () => {
    const dpc = duplicate(_arr_mock_number, 2);

    expect(dpc).toEqual([1, 2, 3, 1, 2, 3]);
    expect(dpc).not.toEqual(_arr_mock_number);
  });

  it('array of string', () => {
    const dpc = duplicate(_arr_mock_string, 2);

    expect(dpc).toEqual(['1', '2', '3', '1', '2', '3']);
    expect(dpc).not.toEqual(_arr_mock_string);
  });
});
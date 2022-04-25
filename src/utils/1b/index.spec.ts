import { last } from '.';

const _arr_mock_number = [1, 2, 3];
const _arr_mock_string = ['1', '2', '3'];

describe('1b last', () => { 
  it('array of number', () => {
    const lst = last(_arr_mock_number);

    expect(lst).toEqual([3]);
    expect(lst).not.toEqual([1]);
    expect(lst).not.toEqual(['1']);
  });

  it('array of string', () => {
    const lst = last(_arr_mock_string);

    expect(lst).toEqual(['3']);
    expect(lst).not.toEqual(['1']);
    expect(lst).not.toEqual([1]);
  });

  it('undfined', () => {
    const lst = last([]);

    expect(lst).toEqual(undefined);
    expect(lst).not.toEqual(['3']);
    expect(lst).not.toEqual(['1']);
    expect(lst).not.toEqual([1]);
  });
});
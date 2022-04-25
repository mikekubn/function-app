import { getTeamArticlesDescription } from '.';

const string_1 = 'Oliver wrote an article RxJS and redux-observable.\nJan wrote articles RxJS and redux-observable, Firebase and 1 more.\nJakub wrote articles MobX in practise, RxJS and redux-observable and 2 more.\nPeter wrote 0 articles.';
const string_2 = 'Tomas wrote an article RxJS and redux-observable, CSS in JS.\nDrahoslav wrote an article RxJS and redux-observable.\nHonza wrote an article RxJS and redux-observable, Firebase.\n';

describe('2a getTeamArticlesDescription', () => { 
  it('getTeamArticlesDescription(1)', () => {
    const fun = getTeamArticlesDescription(1);

    expect(fun).toContain(string_1);
  });

  it('getTeamArticlesDescription(2)', () => {
    const fun = getTeamArticlesDescription(2);

    expect(fun).toContain(string_2);
  });
});
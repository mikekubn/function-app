interface IDuplicate {
  arr: string[] | number [],
  times: number
}

const duplicate = ( arr: IDuplicate['arr'], times: IDuplicate['times']): IDuplicate['arr'] => {
  const cloneNumbers = [];

  Array(times).fill(times).forEach(() => {
    arr.map((num: never) => cloneNumbers.push(num));
  });

  return cloneNumbers;
};

export { duplicate };

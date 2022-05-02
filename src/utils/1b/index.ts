interface ILast {
  arr: string[] | number [] | undefined
}
  
const last = (arr: ILast['arr']): (string | number | undefined)[] | undefined => {
  if (arr?.length) {
    const slice =  arr.slice(-1).pop();

    return [slice];
  }

  return undefined;
};

export { last };
const parseNPMVersion = (str: string): { name: string, version: string } => {

  if (str.startsWith('@')) {
    const string = str.substring(1).split('@');
    return {
      name: `@${string.shift()}`,
      version: `${string.pop()}`,
    };
  }
    
  const string = str.split('@');
  return {
    name: `${string.shift()}`,
    version: `${string.pop()}`,
  };
};

export { parseNPMVersion };
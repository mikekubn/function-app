import { parseNPMVersion } from '.';

describe('1d parseNPMVersion', () => { 
  it('string to object', () => {
    const npmVersion = parseNPMVersion('react@16.0.0');

    expect(npmVersion).toEqual({ name: 'react', version: '16.0.0' });
    expect(npmVersion).not.toEqual({ name: 'react', version: '@16.0.0' });
  });
  it('string to object startsWith', () => {
    const npmVersion = parseNPMVersion('@webscopeio/react-textarea-autocomplete@4.6.1');

    expect(npmVersion).toEqual({ name: '@webscopeio/react-textarea-autocomplete', version: '4.6.1' });
    expect(npmVersion).not.toEqual({ name: 'webscopeio/react-textarea-autocomplete', version: '@4.6.1' });
  });
});

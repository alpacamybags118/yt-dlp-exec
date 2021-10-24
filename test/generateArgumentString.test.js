const yt = require('../src/index');

describe('generateArgumentString', () => {
  test('should return a valid arg array', () => {
    const expected = ['test', '-o', '-', '-q', '-f', 'bestaudio', '--prefer-free-formats', '-r', '100K'];
    const result = yt.generateArgumentString('test',
    {
      o: '-',
      q: '',
      f: 'bestaudio',
      preferFreeFormats: true,
      r: '100K',
    });

    expect(result).toEqual(expected);
  });

  test('should return a valid arg array if no options provided', () => {
    const expected = ['test'];
    const result = yt.generateArgumentString('test', {})

    expect(result).toEqual(expected);
  });
})
const yt = require('../src/index');
const ChildProcess = require('child_process').ChildProcess

describe('createYtDlpAsProcess', () => {
  test('should throw error if URL is missing', () => {
    expect(() => yt.createYtDlpAsProcess()).toThrow('Media URL has not been provided!');
  });

  test('should return an object on completion', async () => {
    const result = await yt.createYtDlpAsProcess('test', {h:true});

    expect(result).toBeInstanceOf(Object);
  });

  test('should return a child process when invoked', async () => {
    const result = yt.createYtDlpAsProcess('test', {h:true});

    expect(result).toBeInstanceOf(ChildProcess);

    await result;
  });
})
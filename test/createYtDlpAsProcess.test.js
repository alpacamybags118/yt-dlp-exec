const yt = require('../src/index');
let execa = require('execa');
const ChildProcess = require('child_process').ChildProcess;

describe('createYtDlpAsProcess', () => {

  test('should throw error if URL is missing', () => {
    expect(() => yt.createYtDlpAsProcess()).toThrow('Media URL has not been provided!');
  });

  test('should return an object on completion', async () => {
    
    expect(async () => await yt.createYtDlpAsProcess('test', {h:true})).toBeInstanceOf(Object);
  });

  test('should return a child process when invoked', async () => {
    const process = yt.createYtDlpAsProcess('test', {h:true});

    expect(process).toBeInstanceOf(ChildProcess);
    expect(async () => await process).toBeTruthy();
  });
})
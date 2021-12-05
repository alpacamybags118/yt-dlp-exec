const yt = require('../src/index');
const ChildProcess = require('child_process').ChildProcess;

describe('createYtDlpAsProcess', () => {

  test('should throw error if URL is missing', () => {
    expect(() => yt.createYtDlpAsProcess()).toThrow('Media URL has not been provided!');
  });

  test('should return an object on completion', async () => {
    
    expect(async () => await yt.createYtDlpAsProcess('test', {h:true})).toBeInstanceOf(Object);
  });

  test('should return a child process when invoked', async () => {
    const process = yt.createYtDlpAsProcess('./bin/yt-dlp', {h:true});

    expect(process).toBeInstanceOf(ChildProcess);

    const result = await process;
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toBeTruthy();
    expect(result.stderr).toBeFalsy();
  });

  test('should be able to provide custom process options', async () => {
    const process = yt.createYtDlpAsProcess('./bin/yt-dlp', {garbage: true}, { stdio: ['pipe', 'pipe', 'pipe'], reject: false });

    expect(process).toBeInstanceOf(ChildProcess);

    const result = await process;
    
    expect(result.exitCode).not.toBe(0);
    expect(result.stdout).toBeFalsy();
    expect(result.stderr).toBeTruthy();
  });
})
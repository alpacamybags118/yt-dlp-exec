'use strict'
const dargs = require('dargs');
const execa = require('execa');
const path = require('path');


const pathToBinary = path.join(path.join(__dirname,'../bin'), 'yt-dlp.exe')

/**
 * Takes media URL and options for invoking yt-dlp and formats them in a string array.
 * @param {string} mediaUrl The URL of the media you wish to download with ytp
 * @param {*} options An object that represents the command line options to invoke yt-dlp with. Uses dargs (https://github.com/sindresorhus/dargs) for object format. See https://github.com/yt-dlp/yt-dlp#usage-and-options for all options
 * @returns string[]
 */
function generateArgumentString(mediaUrl, options) {
  return [mediaUrl].concat(dargs(options, {useEquals: false}))
}

/**
 * createYtDlpAsProcess will create a child process that invokes yt-dlp with the provided arguments and return that process.
 * @param {string} mediaUrl The URL of the media you wish to download with ytp
 * @param {*} options An object that represents the command line options to invoke yt-dlp with. Uses dargs (https://github.com/sindresorhus/dargs) for object format. See https://github.com/yt-dlp/yt-dlp#usage-and-options for all options
 * @returns execa.ExecaChildProcess
 */
function createYtDlpAsProcess(mediaUrl, options) {
  if(!mediaUrl) {
    throw new Error('Media URL has not been provided!');
  }

  return execa(pathToBinary, generateArgumentString(mediaUrl, options), { stdio: ['ignore', 'pipe', 'ignore'] });
}

module.exports = createYtDlpAsProcess
module.exports.createYtDlpAsProcess=createYtDlpAsProcess;
module.exports.generateArgumentString = generateArgumentString

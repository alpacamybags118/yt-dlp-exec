const process = require('process');

/**
 * Gets appropriate binary name depending on OS
 * @returns string representation of binary name
 */
function getBinaryName() {
  return process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp';
}

module.exports.getBinaryName = getBinaryName

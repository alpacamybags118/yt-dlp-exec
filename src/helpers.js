const process = require('process');
const fs = require('fs');

/**
 * Gets appropriate binary name depending on OS
 * @returns string representation of binary name
 */
function getBinaryName() {
  return process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp';
}

function setYtBinaryPermissions(path) {
  console.log(path);
  if (process.platform !== 'win32') {
    fs.chmodSync(path, 755);
  }
}

module.exports.getBinaryName = getBinaryName
module.exports.setYtBinaryPermissions = setYtBinaryPermissions
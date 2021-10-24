const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { getBinaryName, setYtBinaryPermissions } = require('../src/helpers');

const baseDownloadUrl = 'https://github.com/yt-dlp/yt-dlp/releases/download';
const releasesUrl = 'https://api.github.com/repos/yt-dlp/yt-dlp/releases'

async function getYtDlpRelease() {
  const binaryFolderPath = path.join(__dirname,'../bin');
  const latestRelease = await fetch(releasesUrl)
    .then((data) => data.json())
    .then((result) => result[0].tag_name);
  
  let binary = getBinaryName();
  const finalDownloadUrl = `${baseDownloadUrl}/${latestRelease}/${binary}`

  if(!fs.existsSync(binaryFolderPath)) {
    fs.mkdirSync(binaryFolderPath);
  }
  
  return fetch(finalDownloadUrl)
    .then((data) => {
      const filePath = path.join(binaryFolderPath,`/${binary}`);
      const destFile = fs.createWriteStream(filePath);
      data.body.pipe(destFile);

      destFile.on('finish', () => {
        setYtBinaryPermissions(filePath);
      });
    })
}

getYtDlpRelease()

# yt-dlp-exec

A small wrapper around [yt-dlp](https://github.com/yt-dlp/yt-dlp), which allows you to invoke it as a child process in your node project. Inspired by [youtube-dl-exec](https://github.com/microlinkhq/youtube-dl-exec). Made for personal use/learning, but anyone is welcome to use/extend it.

## Features
* Downloads appropriate `yt-dlp` for OS
* Allows you to pass any supported `yt-dlp` arguments

## Requirements
1. Node version 12 or greater


## Install
```
npm install yt-dlp-exec
```

## Usage

## Javascript
```javascript
const yt = require('@alpacamybags118/yt-dlp-exec');

const result = yt.createYtDlpAsProcess('https://some.url', {
  f: 'bestaudio',
  preferFreeFormats: true,
});

result.on('exit', (exit) => {
  console.log(exit);
})
```

## Typescript
```ts
import createYtDlpAsProcess from '@alpacamybags118/yt-dlp-exec'

const process = createYtDlpAsProcess(
				'https://some.url',
				{
					o: '-',
					q: '',
					f: 'bestaudio',
					preferFreeFormats: true,
					r: '100K',
				}
			);
```

Argument list fo commands uses [`dargs`](https://github.com/sindresorhus/dargs) formatting. Returned child process is in [`execa`](https://github.com/sindresorhus/execa) format
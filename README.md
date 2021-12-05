# yt-dlp-exec

A small wrapper around [yt-dlp](https://github.com/yt-dlp/yt-dlp), which allows you to invoke it as a child process in your node project. Inspired by [youtube-dl-exec](https://github.com/microlinkhq/youtube-dl-exec). Made for personal use/learning, but anyone is welcome to use/extend it.

## Features
* Downloads appropriate `yt-dlp` for OS (see [`download-yt-dlp.js`](./hooks/download-yt-dlp.js))
* Allows you to pass any supported `yt-dlp` arguments

## Requirements
1. Node version 12 or greater


## Install
```
npm install @alpacamybags118/yt-dlp-exec
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

You can also pass custom process options (in `execa` format: see https://github.com/sindresorhus/execa) for more control over settings such as stdio.

```javascript
const yt = require('@alpacamybags118/yt-dlp-exec');

const result = yt.createYtDlpAsProcess('https://some.url', {
  f: 'bestaudio',
  preferFreeFormats: true,
}, { stdio: ['pipe', 'pipe', 'pipe'] });

result.on('exit', (exit) => {
  console.log(exit);
})
```

Argument list fo commands uses [`dargs`](https://github.com/sindresorhus/dargs) formatting. Returned child process is in [`execa`](https://github.com/sindresorhus/execa) format
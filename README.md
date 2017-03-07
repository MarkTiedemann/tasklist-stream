# tasklist-stream

**Same as [`tasklist`](https://github.com/sindresorhus/tasklist) but with a streaming interface.**

## Installation

```sh
npm install tasklist-stream
```

## Quickstart

```js
const tasklist = require('tasklist-stream')

tasklist()
  .on('data', console.log)
  /* { imageName: 'node.exe',
       pid: 408,
       sessionName: 'Console',
       sessionNumber: 2,
       memUsage: 23031808 }
     { imageName: 'tasklist.exe',
       pid: 3728,
       sessionName: 'Console',
       sessionNumber: 2,
       memUsage: 8884224 } */
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
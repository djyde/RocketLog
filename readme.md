# RocketLog (WIP)

Bring console.log to terminal. Say goodbye to 'The console had gone before I opening the dev tool!'.

# Screenshot

![](http://ww4.sinaimg.cn/large/62580dd9gw1eydkgp2k8zj20bd0c575h.jpg)

# Install

```shell
$ npm install rocketlog -g # Global RocketLog to run socket server.
```

```html
<script src="path/to/rocketlog.js"></script>
```

or use CommonJS:

```shell
$ npm install rocketlog
```

```javascript
const Rocket = require('rocketlog');
```

# Usage

```javascript
Rocket.log('This is log')
Rocket.error('This is error')
Rocket.warn('This is warn')
```

# Notes

- You should remove the whole `rocketlog.js` in production environment without worring about the `Rocket.log()` not work. It will work when there is no `RocketLog` as `console.log()`.

- Connecting to socket server needs some time. So the faster console before connecting to socket server will not display on terminal.

# License

MIT License

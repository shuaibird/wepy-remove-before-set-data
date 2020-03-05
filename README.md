# wepy-remove-before-set-data

A workaround to remove the before-setData hook in wepy for fixing issues of using components.

## Install
```
npm install wepy-remove-before-set-data --save-dev
```

## How to use
```javascript
/* wepy.config.js */

// import the plugin
const RemoveBeforeSetData = require('wepy-remove-before-set-data');

// add the plugin
module.exports = {
  plugins: [
	// by default it's disabled
    RemoveBeforeSetData({ enabled: true }),
  ],
};
```

## Things to know
This is a temporary workaround for fixing the wepy2 - the issue ticket [#2356](https://github.com/Tencent/wepy/issues/2356).
It works for `@wepy/core 2.0.0-alpha.9` and probably won't be needed in the later versions.

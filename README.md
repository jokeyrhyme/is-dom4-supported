# is-es5-supported.js

does this JavaScript environment conform to DOM 4?


## What is this?

_coming soon_


## Supported Environments

_coming soon_


## Usage

- CommonJS (e.g. Node.js, Browserify, etc) use [index.js](index.js)

```javascript
var isDOM4Supported = require('is-dom4-supported');
console.log(isDOM4Supported()); // `true` or `false`
```

- [dist/index.js](dist/index.js) is a UMD-wrapped version for browsers and AMD

```html
<script src="dist/index.js"></script>
<script>
console.log(isDOM4Supported()); // `true` or `false`
</script>
```

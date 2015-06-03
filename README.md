# is-dom4-supported.js

does this JavaScript environment conform to DOM 4?

[![npm module](https://img.shields.io/npm/v/is-dom4-supported.svg)](https://www.npmjs.com/package/is-dom4-supported)


## What is this?

I wanted my web apps to be able to detect support for [Polymer](https://www.polymer-project.org/)
and the [WebComponents poly-fills](http://webcomponents.org/polyfills/).

Combined with an [ECMAScript 5 feature-detect](https://github.com/jokeyrhyme/is-es5-supported), this project
ought to answer the following questions:

- does the environment support Polymer and WebComponents.js (lite)?
- do I need to continue with a non-Polymer fallback?

I've checked and confirmed that this project tests all the parts of DOM 4 that
WebComponents.js (lite) depends upon (plus some other things I'm interested in).


## Supported Environments

I've manually tested in a range of environments:

- `true`: Chrome (43), (Mobile) Safari (8), Firefox (38), Internet Explorer
  (10, 11), Edge

- `false`: Internet Explorer (6, 7, 8, 9)


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


## API

### `isDOM4Supported(el)`

- @param {`Element`} [el] a DOM Element to run tests against
- @returns {`Boolean`} does this JavaScript environment conform to DOM 4?

This project creates a temporary unattached DOM Element if you do not provide
one. If you are performing other tests against DOM Elements, you might consider
reusing the same one, hence the optional parameter.

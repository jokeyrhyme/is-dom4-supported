# is-dom4-supported.js [![npm module](https://img.shields.io/npm/v/is-dom4-supported.svg)](https://www.npmjs.com/package/is-dom4-supported) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/github/jokeyrhyme/is-dom4-supported?branch=master&svg=true)](https://ci.appveyor.com/project/jokeyrhyme/is-dom4-supported) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/is-dom4-supported.svg?branch=master)](https://travis-ci.org/jokeyrhyme/is-dom4-supported)

does this JavaScript environment conform to DOM 4?


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

WebComponents.js poly-fills `CustomEvent` and `MutationObserver`, so you'll
probably want to ignore the results for these tests:

```javascript
var isDOM4Supported = require('is-dom4-supported');
console.log(isDOM4Supported(null, {
  ignore: ['dom4.customevent', 'dom4.mutationobserver']
})); // `true` or `false`
```


## API

### `isDOM4Supported(el, options)`

- @param {`Element`} [el] a DOM Element to run tests against
- @param {`SupportedOptions`} [options]
- @returns {`boolean`|`Object`} true|false unless returnObject is true

This project creates a temporary unattached DOM Element if you do not provide one.
If you are performing other tests against DOM Elements,
you might consider reusing the same one, hence the optional parameter.

The report `Object` contains the results of individual tests prefixed by their DOM level (e.g. "dom4.customevent"),
as well as summary properties that are `true` if all preceding properties are `true` (e.g. "dom4").

#### @typedef {`Object`} SupportedOptions

- @property {`string[]`} ignore - array of tests to ignore for summaries
- @property {`boolean`} returnObject - if true, function returns a detailed Object

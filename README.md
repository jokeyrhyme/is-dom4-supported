# is-dom4-supported.js

does this JavaScript environment conform to DOM 4?


## What is this?

I wanted my web apps to be able to detect support for [Polymer](https://www.polymer-project.org/)
and the [WebComponents poly-fills](http://webcomponents.org/polyfills/).

Combined with an [ECMAScript 5 feature-detect](https://github.com/jokeyrhyme/is-es5-supported), this project
ought to be answer the following questions:

- does the environment support Polymer and WebComponents.js (lite)?
- do I need to activate a non-Polymer fallback?

I've checked and confirmed that this project tests all the parts of DOM 4 that
WebComponents.js (lite) depends upon (plus a some other things I'm interested in).


## Supported Environments

I've manually tested in a range of environments:

- `true`: Chrome (43), (Mobile) Safari (8), Firefox (38), ??

- `false`: ??


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

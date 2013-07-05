sha1-digest
===========

A simple, cross-platform streaming sha1 digest.

Usage is very simple and should work the same in both node.js and browser versions.

```js
var sha1sum = require('sha1-digest')();

// Update accepts either binary objects or strings.
// The strings will be encoded as UTF8 bytes.
sha1sum.update("Hello ");
sha1sum.update("World\n");

var hex = sha1sum.digest();
```

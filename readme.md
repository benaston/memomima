# memomima

A memoization function. Uses JSON.stringify for objects arguments.

File size: **495 bytes**.<br/>
Supported platforms: **server and browser**.<br/>
Supported language versions: **ES5 and above**.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install memomima```

## Example

```javascript
var memoize = require('memomima').memoize;

//arrange
var o, fn;

o = {
	foo: function() {}
};
spyOn(o, 'foo').and.callThrough();            
function fn() { return o.foo(); }

//act & assert
fn();
fn();
expect(o.foo.calls.count()).toBe(2);

fn = memoize(fn);
fn();
fn();
expect(o.foo.calls.count()).toBe(3); // Not 4!
```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.
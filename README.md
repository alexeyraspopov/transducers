# Transducers

[Transducers](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming) for JavaScript.

## Usage

```
function inc (x) { return x + 1 }

function plus(x, y) { return x + y }

function odd(x) { return !!(x % 2) }

var chain = comp( map(inc), filter(odd) );

transduce(chain, plus, 0, [0, 1, 2, 3, 4, 5, 6])
// 16
```

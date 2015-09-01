# deep-property-counter
traverse and object. count all of its properties. generate a key to count map. useful for tracking memory leaks

```js
var count = require('deep-property-counter')

var o = {
  a:[o,1,2,3],
  b:{
    c:{
      name:'bob'
    },
    d:{
      name:'susan'
    }
  }
}

var report = {}
console.log(count(o,report))
console.log(report)

```

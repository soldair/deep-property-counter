var test = require('tape')
var dpc = require('../')

test('can',function(t){

  var o = {
    a:[1,2,3],
    b:{
      c:{
        name:'bob'
      },
      d:{
        name:'susan'
      }
    }
  }

  // create cycle to make sure it doesnt crash with a blown stack
  o.a.push(o)

  var report = {}
  t.equals(10,dpc(o,report),'count returns 11. inclusive of the object itself')
  t.equals(report[""],10,'highest key in report reports count.')
  t.equals(report[" |a"],4,'shgould have properties in a')
  console.log(report)
  t.end() 

})


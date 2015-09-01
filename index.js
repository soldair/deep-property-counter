var t = Date.now()

module.exports = count

module.exports.delim = ' |'

function count (o, data, id) {
  var countKey = '___counted' + t
  var c = 1
  var i

  if (!id) id = ''
  if (!o) return c

  if (o[countKey]) return 0
  if (o instanceof Object) {
    Object.defineProperty(o, countKey, {value: true, enumerable: false, configurable: true})
  }

  if (typeof o === 'object') {
    for (i in o) {
      c += count(o[i], data, id + module.exports.delim + i)
    }

  } else if (Array.isArray(o)) {
    for (i = 0;i < o.length;++i) {
      c += count(o[i], data, id + module.exports.delim + i)
    }

  }

  if (o instanceof Object) delete o[countKey]

  if (data) data[id] = c

  return c
}

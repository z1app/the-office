function arrayrify (obj) {
  try {
    return Object.keys(obj).map(key => {
      if (!obj[key].length) {
        return Object.assign(obj[key], { id: key })
      } else {
        return Object.assign({value: obj[key]}, { id: key })
      }
    })
  } catch (e) {
    return []
  }
}

function safeArrayrify (obj) {
  try {
    obj = obj && obj.val ? obj.val() : obj
    if (obj && Object.keys(obj).length) {
      return arrayrify(obj)
    }
    return []
  } catch (e) {
    return []
  }
}

function unArrayrify (arr) {
  return arr.reduce((result, actual) => {
    result[actual.id] = Object.assign(actual, { id: undefined })
    return result
  }, {})
}

module.exports = {
  arrayrify,
  safeArrayrify,
  unArrayrify,
}

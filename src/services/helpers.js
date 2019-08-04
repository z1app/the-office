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

function slugify (string) {
  return string.toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')
    .replace(/[èÈéÉêÊëË]+/g, 'e')
    .replace(/[ìÌíÍîÎïÏ]+/g, 'i')
    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')
    .replace(/[ùÙúÚûÛüÜ]+/g, 'u')
    .replace(/[ýÝÿŸ]+/g, 'y')
    .replace(/[ñÑ]+/g, 'n')
    .replace(/[çÇ]+/g, 'c')
    .replace(/[ß]+/g, 'ss')
    .replace(/[Ææ]+/g, 'ae')
    .replace(/[Øøœ]+/g, 'oe')
    .replace(/[%]+/g, 'pct')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

module.exports = {
  arrayrify,
  slugify,
  safeArrayrify,
  unArrayrify,
}

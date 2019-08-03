import { database } from '../services/firebase'
import { safeArrayrify } from '../services/helpers'

class BaseModel {
  constructor (modelName) {
    this.modelName = modelName || ''
    this.Model = modelName ? database.ref(modelName) : database.ref()
  }

  getAll () {
    return this.Model.once('value')
      .then(safeArrayrify)
  }

  findByAttribute (attr, value) {
    return this.Model.orderByChild(attr)
      .equalTo(value)
      .once('value')
      .then(safeArrayrify)
  }

  find (attr, value) {
    if (attr === 'id') {
      return this.Model
        .child(value)
        .once('value')
        .then((snap) => {
          let tmpData = {}
          tmpData[snap.key] = snap.val()
          return tmpData
        })
        .then(safeArrayrify)
    } else {
      return this.Model
        .orderByChild(attr)
        .startAt(`${value}`)
        .endAt(`${value}\uf8ff`)
        .once('value')
        .then(safeArrayrify)
    }
  }

  update (id, data) {
    if (!id) {
      return Promise.resolve(true)
    }
    return this.Model.child(id)
      .update(data)
  }

  set (id, data) {
    return this.Model.child(id)
      .set(data)
  }

  get (id = '/', array = false) {
    return this.Model.child(id)
      .once('value')
      .then(res => {
        if (res && res.val && res.val()) {
          if (!res.val().replace && Object.keys(res.val()).length) {
            if (array) {
              return safeArrayrify(res.val())
            } else {
              if (id === '/') {
                return res.val()
              } else {
                return Object.assign({ id: id }, res.val())
              }
            }
          } else {
            return res.val()
          }
        } else {
          if (array) {
            return []
          } else {
            return {}
          }
        }
      })
  }

  watch (id = '/', array = false, cb = console.log) {
    this.Model.child(id).on('value', (res) => {
      if (res && res.val && res.val()) {
        if (!res.val().replace && Object.keys(res.val()).length) {
          if (array) {
            cb(safeArrayrify(res.val()))
          } else {
            if (id === '/') {
              cb(res.val())
            } else {
              cb(Object.assign({ id: id }, res.val()))
            }
          }
        } else {
          cb(res.val())
        }
      } else {
        if (array) {
          cb([])
        } else {
          cb({})
        }
      }
    })
  }

  delete (id) {
    return this.set(id, null)
  }

  create (data, id = false) {
    const instance = this.Model.push()
    const key = id ? id : instance.key
    return this.set(key, data)
      .then(() => this.get(key))
  }

  increaseCounter (id) {
    return this.Model.child(id)
      .transaction(counter => counter ? counter + 1 : 1)
  }

  decreaseCounter (id) {
    return this.Model.child(id)
      .transaction(counter => counter ? counter - 1 : 0)
  }
}

export default BaseModel

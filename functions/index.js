const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const userOnlineRef = functions.database.ref('/users/{userId}/online')

exports.removeFromRooms = userOnlineRef.onUpdate((change, context) => {
    const { params } = context
    const { userId } = params
    const newRef = change.after
    const oldRef = change.before

    const hasChange = newRef.val() === oldRef.val()
    const isOnline = newRef.val()

    if (hasChange || isOnline) {
      return null
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    return delay(2000)
      .then(() => {
        return admin.database()
          .ref(`users/${userId}/online`)
          .once('value')
      })
      .then(userStateSnap => userStateSnap && userStateSnap.val())
      .then((userState) => {
        if (!userState){
          return admin.database()
            .ref(`users/${userId}/activeRoom`)
            .once('value')
            .then(activeSnap => activeSnap && activeSnap.val())
            .then(activeRoom => {
              if (activeRoom) {
                return Promise.all([
                  admin.database()
                    .ref(`rooms/${activeRoom}/users/${userId}`)
                    .set(null),
                  admin.database()
                    .ref(`users/${userId}/activeRoom`)
                    .set(null),
                ])
              }
            })
        }
        return true
      })
  })
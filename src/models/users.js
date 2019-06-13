import baseModel from './base'
import { database } from '../services/firebase'

class Usersmodel extends baseModel {
  constructor (modelName = 'users') {
    super(modelName)
  }

  onDisconect (uid) {
    database.ref('.info/connected')
      .on(
        'value',
        (isOnline) => {
          if (isOnline.val()) {
            this.update(uid, { online: true })
            this.Model
              .child(uid)
              .onDisconnect()
              .update({ online: false })
          } else {
            this.update(uid, { online: false })
          }
        }
      )
  }
}

export default Usersmodel
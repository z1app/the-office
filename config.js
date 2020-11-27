const appName = 'Escritório Z1'
const appSlug = 'escritorio-z1'

const firebaseConfig = {
  apiKey: 'AIzaSyC9kv2tYfMhnOZ8bxnc4L8m6y4aY6giI4g',
  databaseURL: 'https://escritorio-z1.firebaseio.com/',
  projectId: 'escritorio-z1',
  authDomain: 'escritorio-z1.firebaseapp.com',
  appId: '1:446405180104:web:e20e39168f40ca6d4ec3fd',
}

const allowedDomains = [
  'z1.app',
]

module.exports = {
  appName,
  appSlug,
  allowedDomains,
  firebaseConfig,
}

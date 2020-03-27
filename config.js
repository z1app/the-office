const appName = 'Game Night Pagar.me'
const appSlug = 'game-night-pagarme'

const firebaseConfig = {
  apiKey: "AIzaSyAL4xD4uOQnwxn3X2HskxjUswBwP-opX2M",
  authDomain: "game-night-pagarme.firebaseapp.com",
  databaseURL: "https://game-night-pagarme.firebaseio.com",
  projectId: "game-night-pagarme",
  appId: "1:538167281989:web:fa9bf66d7cb9299bc3562c"
}

const allowedDomains = [
  'pagar.me',
  'stone.co',
  'stone.com.br',
  'mundipagg.com',
]

module.exports = {
  appName,
  appSlug,
  allowedDomains,
  firebaseConfig,
}
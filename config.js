const appName = 'Escritório Pagar.me'
const appSlug = 'escritorio-pagarme'

const firebaseConfig = {
  apiKey: "AIzaSyCJGYxpgL8rW6GyliDZ9cPSrxxD2zAc31U",
  authDomain: "treinamentos-escritorio.firebaseapp.com",
  databaseURL: "https://treinamentos-escritorio.firebaseio.com",
  projectId: "treinamentos-escritorio",
  appId: "1:714837484243:web:8f8f2b98c524592c8f6a26"
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
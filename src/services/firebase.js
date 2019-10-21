import firebase  from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAzIRaAavq_t2GESw0QkWqIOj4EXKSJt_k',
  databaseURL: 'https://pagarme-escritorio.firebaseio.com/',
  projectId: 'project-637593188501',
  authDomain: 'pagarme-escritorio.firebaseapp.com',
  appId: '1:637593188501:web:c7b9d7d3c4f7d369',
})

const googleAuth = new firebase.auth.GoogleAuthProvider()

export const database = firebase.database()

export const authWithGoogle = () =>
  firebase.auth().signInWithPopup(googleAuth)

export const authLogout = () =>
  firebase.auth().signOut()

export const getUser = () => firebase.auth().currentUser

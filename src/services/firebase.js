import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { firebaseConfig } from '../../config'

firebase.initializeApp(firebaseConfig)

const googleAuth = new firebase.auth.GoogleAuthProvider()

export const database = firebase.database()

export const authWithGoogle = () => firebase.auth().signInWithPopup(googleAuth)

export const authLogout = () => firebase.auth().signOut()

export const getUser = () => firebase.auth().currentUser

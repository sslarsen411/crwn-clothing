import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDycPXafKqZ5jYQCWClHPV9LZrCHICGNOQ',
  authDomain: 'crwn-db-79d7b.firebaseapp.com',
  projectId: 'crwn-db-79d7b',
  storageBucket: 'crwn-db-79d7b.appspot.com',
  messagingSenderId: '231313591490',
  appId: '1:231313591490:web:f5a273b02161ba4f44ff5b',
  measurementId: 'G-MWXZY4J0MN'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

/* Authentication setup */
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

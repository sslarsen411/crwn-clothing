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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  // console.log('snapshot', snapshot)
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(firebaseConfig)

/* DELETE ME - ONE-TIME CODE TO MOVE SHOP ITEMS TO fb */
export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  batch.commit()
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

/* Authentication setup */
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

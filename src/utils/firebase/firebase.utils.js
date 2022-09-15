import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA0npvFfPlcAsJ6AQxzshNOP4pdgL4UR-Q',
  authDomain: 'crown-clothing-db-e999c.firebaseapp.com',
  projectId: 'crown-clothing-db-e999c',
  storageBucket: 'crown-clothing-db-e999c.appspot.com',
  messagingSenderId: '765743680500',
  appId: '1:765743680500:web:46c6f8ca29a2d7812287a1',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

// AUTH
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// DB
export const db = getFirestore()

// add collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const getCategoriesAndDocuments = async (type) => {
  const collectionRef = collection(db, type)
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

// Create a new user
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.error('Error creating user!', error)
    }
  }

  console.log('userDocRef', userDocRef)

  return userDocRef
}

// create user with email
export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = (onAuthStateChanged)(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}

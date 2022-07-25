import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

// AUTH
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// DB
export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
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
      })
    } catch (error) {
      console.error('Error creating user!', error)
    }
  
  }

  return userDocRef

}
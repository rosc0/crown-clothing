import { 
  signInWithGooglePopup, 
  createUserDocFromAuth 
} from  '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/SignUpForm/SignUpForm'

function SignIn() {

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGooglePopupUser}>Sign In With Google Popup</button>

      <SignUpForm />
    </div>
  )

}

export default SignIn
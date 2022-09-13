import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'

import { AuthenticationContainer } from './AuthenticationStyle'

function SignIn() {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )

}

export default SignIn
import { useState } from 'react'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailPassword,
} from '../../utils/firebase/firebase.utils'

import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'

import { SignInContainer, ButtonsContainer } from './SignInFormStyle'

const defaultFormData = {
  email: '',
  password: '',
}

function SignIn() {
  const [formData, setFormData] = useState(defaultFormData)
  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await signInAuthUserWithEmailPassword(email, password)
      if (response) {
        setFormData(defaultFormData)
      } else {
        alert('Error logging in')
      }
    } catch (error) {
      alert('Incorrect email/password combination')
    }
  }

  const logGooglePopupUser = async () => {
    await signInWithGooglePopup()
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          required
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGooglePopupUser}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn

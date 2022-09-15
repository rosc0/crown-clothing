import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

import { signUpStart } from '../../store/user/user.action'

import { SignUpContainer } from './SignUpFormStyle'

const defaultFormData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function SignUp() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(defaultFormData)
  const { displayName, email, password, confirmPassword } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      dispatch(signUpStart(email, password, displayName))
      setFormData(defaultFormData)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          required
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirm Password'
          required
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUp

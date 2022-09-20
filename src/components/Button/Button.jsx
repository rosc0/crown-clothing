import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from './ButtonStyle'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

  }[buttonType]
)

function Button({ children, buttonType, isLoading, ...props }) {

  const CustomButton = getButton(buttonType)

  return (
    <CustomButton {...props}>
      { isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button

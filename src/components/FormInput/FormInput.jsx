import React from 'react'
import { FormInputLabel, Input, Group } from './FormInputStyle'

function FormInput({ label, ...props }) {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel shrink={props.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput

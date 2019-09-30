import React from 'react'
import { InputText } from '../input-text/input-text.component'

export const InputEmail = (props) => (
  <InputText {...props} type='email' pattern='^.+@.+\..{2,}$' />
)

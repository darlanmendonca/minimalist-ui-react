import React from 'react'
import { InputText } from '../input-text/input-text.component'

export const InputNumber = (props) => (
  <InputText {...props} type='text' pattern='\d' />
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputPassword } from './input-password.component'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputPassword', () => (
    <InputPassword
      label={ text('label', 'label') }
      value={ text('value', '') }
      name={ text('name', 'email') }
      placeholder={ text('placeholder', 'placeholder') }
      readOnly={ boolean('readOnly', false) }
      disabled={ boolean('disabled', false) }
      maxLength={ number('maxLength') }
      autoFocus={ boolean('autoFocus', false) }
      pattern={ text('pattern') }
    />
  ))

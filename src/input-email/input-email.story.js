import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputEmail } from './input-email.component'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputEmail', () => (
    <InputEmail
      label={ text('label', 'label') }
      value={ text('value', '') }
      name={ text('name', 'email') }
      placeholder={ text('placeholder', 'placeholder') }
      readOnly={ boolean('readOnly', false) }
      disabled={ boolean('disabled', false) }
      autoFocus={ boolean('autoFocus', false) }
      pattern={ text('pattern') }
      autoComplete={ select('autoComplete', ['off', 'on'], 'off') }
    />
  ))

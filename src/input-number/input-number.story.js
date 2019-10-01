import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputNumber } from './input-number.component'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputNumber', () => (
    <InputNumber
      label={ text('label', 'number') }
      value={ text('value', '') }
      name={ text('name', 'number') }
      placeholder={ text('placeholder', '') }
      readOnly={ boolean('readOnly', false) }
      disabled={ boolean('disabled', false) }
      autoFocus={ boolean('autoFocus', false) }
    />
  ))

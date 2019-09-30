import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputText } from './input-text.component'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputText', () => (
    <InputText
      label={ text('label', 'label') }
      value={ text('value', '') }
      name={ text('name', 'username') }
      placeholder={ text('placeholder', 'placeholder') }
      readOnly={ boolean('readOnly', false) }
      disabled={ boolean('disabled', false) }
      maxLength={ number('maxLength') }
      autoCapitalize={ select('autoCapitalize', ['none', 'sentences', 'words', 'characters']) }
      autoFocus={ boolean('autoFocus', false) }
      pattern={ text('pattern') }
      autoComplete={ select('autoComplete', ['off', 'on'], 'off') }
    />
  ))

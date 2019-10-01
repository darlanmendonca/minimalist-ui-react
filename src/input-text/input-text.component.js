import React, { useState, useEffect, createRef, useContext } from 'react'
import { FormContext } from '../form/form.context'
import { Label, Input } from './input-text.style'

export const InputText = props => {
  const { setContext, submited } = useContext(FormContext)
  const [ isSelected, setIsSelected ] = useState(false)
  const [ value, setValue ] = useState(props.value)
  const [ validity, setValidity ] = useState({valid: true})
  const [ validationMessage, setValidationMessage ] = useState('')

  const input = createRef()
  const label = validationMessage
    ? `${props.label} ${validationMessage}`
    : props.label

  useEffect(() => {
    setContext(props.name, value || '')
  }, [value])

  useEffect(() => {
    if (submited) {
      setValidity(input.current.validity)
    }
  }, [submited, value])

  useEffect(() => {
    const { valueMissing, patternMismatch } = validity
    switch(true) {
      case valueMissing:
        setValidationMessage('is required')
        break
      case patternMismatch:
        setValidationMessage('is invalid')
        break
      default:
        setValidationMessage('')
    }
  }, [validity, value])

  const onFocus = () => setIsSelected(true)
  const onBlur = () => setIsSelected(false)
  const onChange = ({ currentTarget }) => setValue(currentTarget.value)

  return (
    <>
      <Label
        isSelected={ isSelected || value }
        disabled={ props.disabled }
        validity={ validity }
      >
        { label }
      </Label>

      <Input
        ref={ input }
        type={ props.type }
        defaultValue={ props.value }
        name={ props.name }
        placeholder={ props.placeholder }
        readOnly={ props.readOnly }
        disabled={ props.disabled }
        maxLength={ props.maxLength }
        autoCapitalize={ props.autoCapitalize }
        autoFocus={ props.autoFocus }
        pattern={ props.pattern }
        autoComplete={ props.autoComplete }
        required={ props.required }
        validity={ validity }

        onFocus={ onFocus }
        onBlur={ onBlur }
        onChange={ onChange }
      />
    </>
  )
}

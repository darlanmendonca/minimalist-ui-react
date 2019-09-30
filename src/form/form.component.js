import React, { useState } from 'react'
import { FormContext } from './form.context'

export const Form = ({ children, onSubmit, onChange, className }) => {
  const [ values, setValues ] = useState({})
  const [ submited, setSubmited ] = useState(false)

  const setContext = (name, value) => {
    if (name) {
      values[name] = value
      setValues({...values})
    }

    if (onChange) {
      onChange()
    }
  }

  const submit = (event) => {
    event.preventDefault()
    setSubmited(true)

    const formIsValid = event.currentTarget.checkValidity()

    if (formIsValid && onSubmit) {
      onSubmit(values)
    }
  }

  return (
    <FormContext.Provider value={ { values, submited, setContext } }>
      <form
        noValidate
        className={ className }
        onSubmit={ submit }
      >
        { children }
      </form>
    </FormContext.Provider>
  )
}

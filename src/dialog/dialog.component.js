import React, { createContext, useState, useEffect, useContext } from 'react'
import { DialogContext } from './dialog.context'

export const Dialog = ({ id, children }) => {
  const context = useContext(DialogContext)
  console.log(context)
  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <div>
      { children } - visible: {String(isVisible)}
    </div>
  )
}

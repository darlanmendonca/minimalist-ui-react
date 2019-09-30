import { createContext } from 'react'

export const DialogContext = createContext({
  current: null,
  setCurrent: () => {},
})

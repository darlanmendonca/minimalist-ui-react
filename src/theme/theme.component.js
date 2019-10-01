import React from 'react'

export const Theme = () => {
  const light = {
    background: 'white',
    text: '#343A40',
    strong: '#212529',
    light: '#868E96',
    soft: '#DEE2E6',
    highlight: '#2BBE8E',
    invalid: '#f03e3e',
  }

  const dark = {
    background: '#212529',
    text: '#ADB5BD',
    strong: '#F1F3F5',
    light: '#ADB5BD',
    soft: '#343A40',
    highlight: '#2BBE8E',
    invalid: '#e03131',
  }

  const setTheme = (theme) => {
    for (let key in theme) {
      const value = theme[key]
      document.body.style.setProperty(`--${key}`, value)
    }
  }

  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
  const isDarkMode = prefersColorScheme.matches
  const currentTheme = isDarkMode ? dark : light

  prefersColorScheme.addListener(event => {
    const theme = event.matches ? dark : light
    setTheme(theme)
  })

  setTheme(currentTheme)
  document.body.style.setProperty('background-color', 'var(--background)')

  return null
}

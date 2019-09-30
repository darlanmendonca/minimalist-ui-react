import { addDecorator, configure } from '@storybook/react'

configure(loadStories, module)

function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/)
  req.keys().forEach(filename => req(filename))
}

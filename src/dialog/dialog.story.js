import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Dialog } from './dialog.component'
import { DialogContext } from './dialog.context'

storiesOf('components', module)
  .add('Dialog', () => {
    const [ current, setCurrent ] = useState(null)

    const show = (id) => setCurrent(id)
    const hide = () => setCurrent(null)

    return (
      <DialogContext.Provider values={ { setCurrent } }>
        <Dialog id='dialog1'>dialog 1</Dialog>
        <Dialog id='dialog2'>dialog 2</Dialog>

        <div>
          <button onClick={ () => show('dialog1') }>show 1</button>
          <button onClick={ () => show('dialog2') }>show 2</button>
        </div>

        <button onClick={ hide }>hide</button>
      </DialogContext.Provider>
    )
  })

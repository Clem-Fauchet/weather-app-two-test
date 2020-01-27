import React, { useState } from 'react'
import './styleTop.scss'
import Weather from './Weather'

import { Manager, Reference, Popper } from 'react-popper'

function Top() {
  const [isSelectOpen, setSelectOpen] = useState(false)

  const onToggleSelectLocation = (prevIsSelectOpen) => {
    setSelectOpen((prevIsSelectOpen) => !isSelectOpen)
  }

  return (
    <div className='top-container'>
      <div className='title'>Weather Up</div>
      <Weather />

      <Manager>
        <Reference>
          {({ ref }) => (
            <button
              className='btn btn-location'
              ref={ref}
              onClick={onToggleSelectLocation}
            >
              Select location
            </button>
          )}
        </Reference>
        <Popper placement='top'>
          {({ ref, style, placement, arrowProps }) =>
            isSelectOpen && (
              <div ref={ref} style={style} data-placement={placement}>
                Popper element
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )
          }
        </Popper>
      </Manager>
    </div>
  )
}

export default Top

import React, { useState } from 'react'
import './styleTop.scss'
import Weather from './Weather'

import { Manager, Reference, Popper } from 'react-popper'

function Top() {
  const [isSelectOpen, setSelectOpen] = useState(false)
  const [query, setQuery] = useState({
    locationName: 'Oslo',
  })

  const onToggleSelectLocation = (prevIsSelectOpen) => {
    setSelectOpen((prevIsSelectOpen) => !isSelectOpen)
  }

  const [updateQuery, setUpdateQuery] = useState(false)

  return (
    <div className='top-container'>
      <div className='title'>What's the Weather?</div>
      <Weather locationName={query.locationName} update={updateQuery} />

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
              <div
                className='popper'
                ref={ref}
                style={style}
                data-placement={placement}
              >
                <div className='form-container'>
                  <label htmlFor='location-name'>Location Name</label>
                  <br />
                  <input
                    type='text'
                    id='location-name'
                    placeholder='City Name'
                    value={query.locationName}
                    onChange={(e) => setQuery({ locationName: e.target.value })}
                  />
                  <button
                    className='btn btn-location'
                    onClick={(prevState) => {
                      setUpdateQuery((prevState) => !updateQuery)
                      setTimeout(() => {
                        setSelectOpen(false)
                      }, 1500)
                    }}
                  >
                    Select
                  </button>
                  <button
                    className='btn btn-blank'
                    onClick={(e) => setQuery({ locationName: '' })}
                  >
                    Blank
                  </button>
                </div>
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

import React from 'react'

const Buttons = ({displaySaved}) => {

  const getSaved = (e) => {
    e.preventDefault()
    displaySaved()
  }
  return (
    <div>
      <input className='btn' type='button' value='My Saved Searches' name='saved' onClick={getSaved}/>
      <input className='btn' type='button' value='Save Search' name='save' />
    </div>
  )

}

export default Buttons

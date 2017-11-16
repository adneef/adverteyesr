import React from 'react'
import Searchbar from './Searchbar'
import Buttons from './Buttons'

const Toolbar = ({submitSearch, displaySaved}) => {

  return (
    <div>
      This is the toolbar
      <Searchbar submitSearch={submitSearch} />
      <Buttons displaySaved={displaySaved} />
    </div>
  )

}

export default Toolbar

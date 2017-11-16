import React from 'react'
import Searchbar from './Searchbar'
import Buttons from './Buttons'

const Toolbar = ({submitSearch, displaySaved, testingAPIRoute}) => {

  return (
    <div>
      This is the toolbar
      <Searchbar
        submitSearch={submitSearch}
        testingAPIRoute={testingAPIRoute}
       />
      <Buttons displaySaved={displaySaved} />
    </div>
  )

}

export default Toolbar

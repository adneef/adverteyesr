import React from 'react'

const Searchbar = ({submitSearch, testingAPIRoute}) => {

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
    submitSearch(e.target.search.value)
    testingAPIRoute(e.target.search.value)
  }
  return (

    <div>
      <label htmlFor='search'>Search</label>
      <form onSubmit={handleSearch}>
        <input type='text' name='search'  />
        <input className="btn" type='submit' name='Submit' />
      </form>
    </div>
  )

}

export default Searchbar

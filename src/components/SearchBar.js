import React, { Component } from 'react'

class SearchBar extends Component {
  onInputChange(event) {
    alert(event.target.value)
  }

  render() {
    return <input onChange={e => console.log(e.target.value)}/>
  }
}

export default SearchBar

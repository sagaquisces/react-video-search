import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}
  }

  render() {
    return (
      <div>
        <p>
          <input
            className='w3-input'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder='Search...'
          />
        </p>
      </div>
    )
  }
}

export default SearchBar

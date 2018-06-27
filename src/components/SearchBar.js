import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div>
        <p>
          <input
            className='w3-input'
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)}
            placeholder='Search...'
          />
        </p>
      </div>
    )
  }
}

export default SearchBar

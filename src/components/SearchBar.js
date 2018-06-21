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
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </p>
      </div>
    )
  }
}

export default SearchBar

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import 'w3-css/w3.css'

import SearchBar from './components/SearchBar'


const API_KEY = 'AIzaSyBJkjEBpcKIJesdlY-Mt_1WQEmoJUxLzog'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'Mahler' }, videos => this.setState({ videos }))
  }
  render() {
    return (
      <SearchBar />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import 'w3-css/w3.css'

import SearchBar from './components/SearchBar'


const API_KEY = 'AIzaSyBJkjEBpcKIJesdlY-Mt_1WQEmoJUxLzog'
YTSearch({ key: API_KEY, term: 'Mahler' }, data => console.log(data))

const App = () =>
  <SearchBar />

ReactDOM.render(<App />, document.getElementById('app'))

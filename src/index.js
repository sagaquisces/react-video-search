import React from 'react'
import ReactDOM from 'react-dom'
import 'w3-css/w3.css'

import SearchBar from './components/SearchBar'


const API_KEY = 'AIzaSyBJkjEBpcKIJesdlY-Mt_1WQEmoJUxLzog'

const App = () =>
  <SearchBar />

ReactDOM.render(<App />, document.getElementById('app'))

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import 'w3-css/w3.css'
import './index.css'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'


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
    const { videos } = this.state
    return (
      <div className='w3-container'>
        <SearchBar />
        <VideoList videos={videos} />
        <VideoDetail video={videos[0]} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))

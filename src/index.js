import _ from 'lodash'
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
      videos: [],
      selectedVideo: null,
    }

    this.videoSearch('Mahler')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)

    const { videos } = this.state
    return (
      <div className='w3-row-padding w3-container'>
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className='w3-half'>
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className='w3-half'>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))

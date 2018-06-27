import React from 'react'

const VideoListItem = ({ video, onVideoClick }) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li
      className='w3-hover-red'
      onClick={() => onVideoClick(video)}
    >
      <div className='w3-cell w3-hide-small'>
        <img src={imageUrl}  />
      </div>
      <div className='w3-large w3-cell w3-container'>{video.snippet.title}</div>
    </li>
  )
}


export default VideoListItem

import React from 'react'

const VideoListItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <tr>
      <th><img src={imageUrl} className='w3-bar-item w3-hide-small' /></th>
      <th>
        <span className='w3-large'>{video.snippet.title}</span>
      </th>
    </tr>
  )
}


export default VideoListItem
